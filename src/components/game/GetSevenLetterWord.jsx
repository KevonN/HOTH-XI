
import React, { useState, useEffect, useRef } from 'react';
import './GetSevenLetterWord.css';
import Letter from '../Letters';

function GetsevenLetterWords({ onScrambledWordChange, onGameOver }) {
    const [word, setWord] = useState('');
    const [scrambledWord, setScrambledWord] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [remainingTime, setRemainingTime] = useState(60);
    const intervalIdRef = useRef(null);

    const handleFileUpload = async () => {
        try {
            if (!buttonClicked) {
                setButtonClicked(true);
                const data = await readCSVFile('src/components/game/dictionary.csv');   //change back to dictionary

                console.log('CSV Data:', data);
                console.log('Type of data:', typeof data);
                const sevenLetterWords = data.filter(word => word.trim().length === 7);
                const randomIndex = Math.floor(Math.random() * sevenLetterWords.length);
                const randomWord = sevenLetterWords[randomIndex];
                // setWord(randomWord);
                console.log('Random word:', randomWord); // Log random word

                const scrambled = randomWord.trim().split('').sort(() => Math.random() - 0.5).join('');
                setScrambledWord(scrambled);
                setCurrentIndex(0); // Reset currentIndex to start from the first letter

                onScrambledWordChange(scrambled);
                startCountdown();
            }
        } catch (error) {
            console.error('Error parsing CSV:', error);
        }
    };

    const startCountdown = () => {
        intervalIdRef.current = setInterval(() => {
          setRemainingTime(prevTime => prevTime - 1);
        }, 1000); // Update every second
    
        // Stop the countdown when remaining time reaches 0
        setTimeout(() => {
          clearInterval(intervalIdRef.current);
          // Notify parent component that the game is over
          onGameOver();
        }, remainingTime * 1000);
    };

    useEffect(() => {
        // Clean up the interval when unmounting
        return () => clearInterval(intervalIdRef.current);
    }, []); // Empty dependency array to run this effect only once

    useEffect(() => {
        if (currentIndex < scrambledWord.length) {
            const timeoutId = setTimeout(() => {
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 1000); // Update every 1 second (adjust as needed)
            return () => clearTimeout(timeoutId);
        }
    }, [currentIndex, scrambledWord]);

    const readCSVFile = (path) => {
        return new Promise((resolve, reject) => {
            fetch(path)
                .then(response => response.text())
                .then(csvString => {
                    const words = csvString.trim().split('\n');
                    resolve(words);
                })
                .catch(error => reject(error));
        });
    };

    return (
        <div>
            {!buttonClicked && (
                <button id="beginButton" onClick={handleFileUpload}>start!</button>
            )}
            <div className="provided">
                {scrambledWord.split('').map((temp, index) => (
                    <Letter key={index} ind={temp} />
                ))}
            </div>
        </div>
    );
}

export default GetsevenLetterWords;
