import React, {useState, useEffect, useRef} from "react"
import './App.css';

const App = () => {
const countDown = 20

const[totalWords, settotalWords] = useState("")
const[countDownRemaining, setcountDownRemaining] = useState(countDown)
const[gameBegin, setGameBegin] = useState(false)
const[countTheWords, setcountTheWords] = useState(0)


const inputRef = useRef(null)


function handleClick(events)
{
  settotalWords(events.target.value)
}

function wordsCalculator(totalWords)
{
  const arrofWords = totalWords.trim().split(" ")
  return arrofWords.filter(text => text !== "").length
}

function gameStart()
{
  setGameBegin(true)
  setcountDownRemaining(countDown)
  settotalWords("")
  inputRef.current.disabled = false
  inputRef.current.focus()
}

function gameOver()
{
  setGameBegin(false)
  setcountTheWords(wordsCalculator(totalWords))
}

useEffect(() => {
  if(gameBegin && countDownRemaining > 0) {
    setTimeout(() => {
      setcountDownRemaining(prevcountDownRemaining => prevcountDownRemaining - 1)
    }, 500)
  } else 
  {
    gameOver()
  }
}, [countDownRemaining, gameBegin])

  return (
      <div className="app">
        <h1>Let's Test Your Typing Speed!</h1>
        <textarea placeholder="Type anything here..." type="text" onChange={handleClick} value={totalWords} disabled={!gameBegin} ref={inputRef}/>
        {countDownRemaining > 5 ? <p>Time In Your Hand: <span>{countDownRemaining}</span></p> : <p> Hurry Up!: <span className="red">{countDownRemaining}</span></p>}
        <button onClick={gameStart} disabled={gameBegin}> Click Here! To Start 🔥 </button>
        <p>Total Number Of Words: <span>{countTheWords}</span></p>
      </div>
  )
}

export default App;