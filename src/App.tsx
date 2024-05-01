import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Quiz from './components/Quiz/Quiz'
import Home from "./components/Home/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Quiz' element={<Quiz/>}></Route>
      </Routes>
    </Router>
  )
}


export default App
