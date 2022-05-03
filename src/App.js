import React, { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import Demo from './components/demo/Demo';

function App() {

  const [showParagraph, setShowParagraph] = useState(false)

  console.log('App running')


  //USECALLBACK: its a hook, that allows us to store a function/object across component executions
  //This allows to tell React that we want to save a function/object, and that this function/object should not be recreated with every execution.

  const toggleParagraph = useCallback(() => {
    setShowParagraph(prevState => !prevState) //since we are relying on a snapshot of our previou state, using the function is better.
  }, [])


  // const arr = [5, 2, 7, 10, 1]
  // const sortedArr = useMemo(() => {
  //   console.log('sorted')
  //   return arr.sort((a, b) => a - b)
  // }, [arr])
  // console.log(sortedArr)


  const arr = useMemo(() => [5, 2, 7, 10, 1], [])
  const sortedArr = useMemo(() => {
    console.log('sorted')
    return arr.sort((a, b) => a - b)
  }, [arr])
  console.log(sortedArr)

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={false} />
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
