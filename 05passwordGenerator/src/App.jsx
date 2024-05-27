/* eslint-disable no-unused-vars */
import { useState, useCallback ,useEffect,useRef} from "react";

import "./App.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


const passwordRef = useRef(null)




  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])


const copypass = useCallback(()=>{

  window.navigator.clipboard.writeText(password)




},[password])








useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])





  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-10 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full mt-10 py-1 px-3"
            placeholder="Password  "
            readOnly
            ref={passwordRef}
          />
        </div>
        <button onClick={copypass}  >copy</button>

        <div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length:{length}</label>
        </div>

        <div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInpur">Numbers</label>
        </div>

        <div>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInpur">Special Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
