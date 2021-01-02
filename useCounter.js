import { useState } from 'react'

export const useCounter = (initialState = 1) => {

  const [counter, setCounter] = useState(initialState)

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    (counter > 1) && setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  }

  return {
    counter,
    decrement,
    reset,
    increment
  }
}
