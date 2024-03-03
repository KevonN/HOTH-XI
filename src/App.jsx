
import './App.css'
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

export default App;