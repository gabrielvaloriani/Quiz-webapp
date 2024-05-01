import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Quiz from './components/Quiz/Quiz'
import Home from "./components/Home/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Quiz' element={<Quiz/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
