// import fs from 'fs';
// import csvParse from 'csv-parse';

// // Function to parse a CSV file and extract words with seven letters
// export function getSevenLetterWords(filePath, callback) {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             callback(err, null);
//             return;
//         }

//         csvParse(data, {
//             delimiter: '\n',
//             columns: false,
//             skip_empty_lines: true
//         }, (err, output) => {
//             if (err) {
//                 callback(err, null);
//                 return;
//             }

//             const sevenLetterWords = output
//                 .filter(word => word[0].trim().length === 7)
//                 .map(word => word[0].trim());

//             callback(null, sevenLetterWords);
//         });
//     });
// }

// import React, { useState } from 'react';
// import Letter from '../Letters';
// import { getRandomScrambledWord } from './ScrambleWord';

// function getSevenLetterWords(filePath, callback) {
//     const [csvData, setCSVData] = useState([]);

//     const handleFileUpload = async (event) => {
//         const file = event.target.files[0];
//         if (!file) return;

//         try {
//             const data = await readCSVFile(file);
//             setCSVData(data);
//         } catch (error) {
//             console.error('Error parsing CSV:', error);
//         }
//     };

//     const readCSVFile = (file) => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();

//             reader.onload = (event) => {
//                 const csvString = event.target.result;
//                 const rows = csvString.trim().split('\n').map(row => row.split(','));
//                 resolve(rows);
//             };

//             reader.onerror = (event) => {
//                 reject(event.target.error);
//             };

//             reader.readAsText(file);
//         });
//     };

//     return (
//         <div>
            //   const [scrambledWord, setScrambledWord] = useState('');

            //     useEffect(() => {
            //     // Load seven-letter words from dictionary.csv and get a random scrambled word
            //     // getSevenLetterWords('./components/game/dictionary.csv', (err, words) => {
            //     //     if (err) {
            //     //     console.error('Error fetching words:', err);
            //     //     return;
            //     //     }
            //         const randomScrambledWord = getRandomScrambledWord(words);
            //         setScrambledWord(randomScrambledWord);
            //     // });
            //     }, []);
                
//             <input type="file" accept=".csv" onChange={handleFileUpload} />
//             {scrambledWord.split('').map((letter, index) => (
//                 <Letter ind = {letter}/>
//                 ))}
//         </div>
//     );
// }

// export default CSVParser;