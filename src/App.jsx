
import './App.css'
import Letter from './components/Letters';
import InputBox from './components/InputBox';

function App() {

  return (
    <>

      <body id="top">

        <header className="header">

          <h1>ANAGRAMS — HOTH XI</h1>

        </header>

        <main>

          <div className="Provided">
            <Letter/>
            <Letter/>
            <Letter/>
            <Letter/>
            <Letter/>
            <Letter/>
            <Letter/>
          </div>

          <div className="inputbox">
            <InputBox/>
          </div>


        </main>

      </body>

    </>
  )
}

export default App
