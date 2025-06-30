import Button from './Components/Button'
import { useState } from 'react'
import './styles.css'


function App() {

  let [number, setNumber] = useState(0)

  const incrementNumber = () => {
    setNumber(prev => prev + 1)
  }

  const resetNumber = () => {
    setNumber(0)
  }

  return (
    <>
      <div className='mainDiv'>
      <h1>{number}</h1>
        <div className='buttonDiv'>
          <Button onClick={incrementNumber}>Increase!</Button>
          <Button onClick={resetNumber}>Reset.</Button>
        </div>
      </div>
    </>
    
  )
}

export default App
