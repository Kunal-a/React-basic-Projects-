
import './App.css'
import { useState } from "react"

function App() {
  // eslint-disable-next-line no-unused-vars, no-undef
  
  const [color, setColor] = useState("olive")
  return (
    <>
     <body style={{backgroundColor: color}}   >
 
 <div  className='buttons'>
 <button  onClick={() => setColor("red")}  className='btnr' >Red</button>
 <button  onClick={() => setColor("yellow")} className='btny' >Yellow</button>
 <button  onClick={() => setColor("grey")} className='btng' >grey</button>
 <button  onClick={() => setColor("pink")} className='btnp' >Pink</button>
 <button  onClick={() => setColor("orange")}  className='btno' >Orange</button>
 <button   onClick={() => setColor("black")}className='btnb' >black</button>
 </div>


     </body>
     
    </>
  )
}

export default App
