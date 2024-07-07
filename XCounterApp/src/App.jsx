import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)
  const handleIncrement =()=>{
  setCount((prevState)=> prevState +1);
  }
  const handleDecrement =()=>{
    setCount((prevState)=> prevState -1);
    }
  return (
    <div>
      <h1>Counter App</h1>
       <div style={{margin:'20px'}}>Count: {count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
