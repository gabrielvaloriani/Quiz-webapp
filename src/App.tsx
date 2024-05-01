import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

// const HomeComponent = () => <Home />;
// const QuizComponent = () => <Quiz />;

export default App
