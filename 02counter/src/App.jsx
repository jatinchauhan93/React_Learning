import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

  // let counter = 10

  const addvalue = ()=>{
    if(counter==22){
      return
    }
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
  }

  const removevalue = ()=>{
    if(counter>0){
    setCount(prevCounter => prevCounter - 1)
    }
  }

  return (
    <>
       <h1>React and JS</h1>
       <h2>counter value  0 to 22=:    {counter} </h2>

       <button
       onClick={()=>addvalue()}
       >add value </button>
           <br/>
       <button 
       onClick={()=>removevalue()}>remove value</button>
    </>

  )
}

export default App
