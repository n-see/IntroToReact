import { useState } from 'react'
import Styles from './Counter.module.css'


//This is our Counter Component with a return and a export default
const Counter = () => {

  const [counter, setCounter] = useState(0)
  const handleIncrement = () => {
    setCounter(preCount => preCount + 1)
    console.log(counter)
  }

  const handleDecrement = () => {
    if(counter > 0){
      setCounter(prevCount => prevCount - 1)
    }
  }
//We need a use state 

//one Functions one th handle our increment a

//One function to  decrement



  return (
    <>
      {/* We need two buttons one to increment and one to decrement */}
      <button className={Styles['btnPrimary']} onClick={handleIncrement}>+</button>
      <span>{counter}</span>
      <button className={Styles['btnSecondary']} onClick={handleDecrement}>-</button>
    </>
  )
}

export default Counter
