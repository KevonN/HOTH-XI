
// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import FormsAndInputs from './components/InputBox';
import InputLetter from './components/inputLetters';
import Controls from './components/gamecontrols';
import GetsevenLetterWords from './components/game/GetSevenLetterWord';
import GameOverScreen from './components/GameOverScreen';

function App() {
  const [wordList, setWordList] = useState([]);
  const [score, setScore] = useState(0);
  const [scrambledWord, setScrambledWord] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleWordsChange = (updatedWordList) => {
    setWordList(updatedWordList);
  };

  const handleScoreChange = (updatedScore) => {
    setScore(updatedScore);
  };

  const handleScrambledWordChange = (word) => {
    setScrambledWord(word);
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  return (
    <div id="top">
      <header className="header">
        <h1>ANAGRAMS — HOTH XI</h1>
      </header>
      <main>
      {!gameOver && ( // Render components only if the game is not over
          <div className="Provided">
            <GetsevenLetterWords onScrambledWordChange={handleScrambledWordChange} onGameOver={handleGameOver} />
          </div>
        )}

      {!gameOver && ( // Render components only if the game is not over
          <div className="gameStats">
            <Controls 
              title="timer" 
              info="00:00" 
            />
            <Controls 
              title="score" 
              info={score} 
            />
          </div>
        )}

        {!gameOver && ( // Render components only if the game is not over
          <div className="inputbox">
            <FormsAndInputs scrambledWord={scrambledWord} onWordsChange={handleWordsChange} onScoreChange={handleScoreChange} />
          </div>
        )}

        {!gameOver && ( // Render components only if the game is not over
          <div className="userInput">
            {wordList.map((word, index) => (
              <div key={index} className="word">
                {[...word].map((char, index) => (
                  <InputLetter key={index} ind={char} />
                ))}
              </div>
            ))}
          </div>
        )}

        {gameOver && <GameOverScreen score={score} />}
        
      </main>

    </div>
  );
}

export default App;
