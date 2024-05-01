import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz/Quiz'
import Home from "./components/Home/Home"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Quiz' element={<Quiz/>}></Route>
    </Routes>
  )
}


export default App
