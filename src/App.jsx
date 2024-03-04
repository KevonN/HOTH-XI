
/* import './App.css'
import FormsAndInputs from './components/InputBox';
import Letter from './components/Letters';

function App() {

  return (
    <>

      <body id="top">

        <header className="header">

          <h1>ANAGRAMS — HOTH XI</h1>

        </header>

        <main>

          <div className="Provided">
            <Letter ind = "A"/>
            <Letter ind = "B"/>
            <Letter ind = "C"/>
            <Letter ind = "D"/>
            <Letter ind = "A"/>
            <Letter ind = "A"/>
            <Letter ind = "A"/>
          </div>

          <div className="inputbox">
            <FormsAndInputs/>
          </div>

        </main>

      </body>

    </>
  )
}

export default App; */

// App.jsx
import React, { useState } from 'react';
import './App.css';
import FormsAndInputs from './components/InputBox';
import Letter from './components/Letters';
import InputLetter from './components/inputLetters';
import Controls from './components/gamecontrols';

function App() {
  const [wordList, setWordList] = useState([]);

  const handleWordsChange = (updatedWordList) => {
    setWordList(updatedWordList);
  };

  return (
    <div id="top">
      <header className="header">
        <h1>ANAGRAMS — HOTH XI</h1>
      </header>
      <main>
      <div className="Provided">
            <Letter ind = "A"/>
            <Letter ind = "B"/>
            <Letter ind = "C"/>
            <Letter ind = "D"/>
            <Letter ind = "A"/>
            <Letter ind = "A"/>
            <Letter ind = "A"/>
          </div>

      <div className="gameStats">
        <Controls 
          title="timer" 
          info="00:00" 
        />
        <Controls 
          title="score" 
          info="0000" 
        />
      </div>

          <div className="inputbox">
          <FormsAndInputs onWordsChange={handleWordsChange} />
        </div>

        <div className="userInput">
          {wordList.map((word, index) => (
            <div key={index} className="word">
              {[...word].map((char, index) => (
                <InputLetter key={index} ind={char} />
              ))}
            </div>
          ))}
        </div>
        
      </main>
    </div>
  );
}

export default App;
