import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("Hello")
  },[])
  

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="container">
      <h2>{count}</h2>
      <button onClick={handleCount}>increase</button>
    </div>
  )
}

export default App