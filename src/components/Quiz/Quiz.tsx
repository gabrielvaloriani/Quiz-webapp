import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../Assets/data'

const Quiz = () => {

  let [index, setIndex] = useState(0)
  let [question, setQuestion] = useState(data[index])

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1 + "."} What material can be recycled infinitely without losing quality?</h2>
      <ul>
        <li>Paper</li>
        <li>Glass</li>
        <li>Plastic</li>
        <li>Aluminum</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 10 questions</div>
    </div>
  )
}

export default Quiz
