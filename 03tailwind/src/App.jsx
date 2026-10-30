import { useState } from 'react'
import Card from './component/card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    usernmae: "jatin",
    age:34
  }

  return (
    <>
    <Card username = "hello jatin"/> 
    <Card username = "hello mentor"/>
    </> 
  )
}

export default App
