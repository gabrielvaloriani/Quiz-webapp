import React from 'react'
import Quiz from './components/Quiz/Quiz'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeComponent />}/>
        <Route path='/quiz' element={<QuizComponent/>} />

      </Routes>

    </Router>
  )
}

const HomeComponent = () => <Home />;
const QuizComponent = () => <Quiz />;

export default App
