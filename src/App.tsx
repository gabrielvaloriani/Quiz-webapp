import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
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

// const HomeComponent = () => <Home />;
// const QuizComponent = () => <Quiz />;

export default App
