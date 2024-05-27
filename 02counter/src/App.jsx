import { useState } from 'react'

import './App.css'

function App() {  

  let  [Counter, setCounter] = useState(15);


  const increaseCount = () => {
    console.log("Counter is added ")
    Counter = Counter+1;
    setCounter(Counter)
  }

  const DecreaseCount = () => {

if(Counter>0){
  Counter = Counter-1;
  setCounter(Counter)
  
}

   
  }




  return (
    <>
     <h1> counter {Counter} </h1>
    <button onClick={increaseCount} > Click to increase Counter</button>
    <button onClick={DecreaseCount} > Click to Decrease Counter</button>
    </>
  )
}

export default App
