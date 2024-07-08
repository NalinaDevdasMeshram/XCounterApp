import { useState } from "react"


function App() {
  const [valueOfCount, setvalueOfCount] = useState(0)
  const handleIncrement =()=>{
  setvalueOfCount((prevState)=> prevState +1);
  }
  const handleDecrement =()=>{
    setvalueOfCount((prevState)=> prevState -1);
    }
  return (
    <div>
      <h1>Counter App</h1>
      <h4 style={{margin:'20px'}}>Count: {valueOfCount}</h4>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
