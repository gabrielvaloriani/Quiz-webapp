import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../Assets/data'

const Quiz = () => {

  let [index, setIndex] = useState(0)
  let [question, setQuestion] = useState(data[index])

  const checkAns = (e,ans) => {
    
  }

  return (
    <div className="container max-w-4xl mx-auto mt-24 bg-white text-gray-800 flex flex-col gap-8 rounded-lg p-6">
      <h2>Let's see if you are prepare &#129303;</h2>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li>{question.option1}</li>
        <li>{question.option2}</li>
        <li>{question.option3}</li>
        <li>{question.option4}</li>
      </ul>
      <button className="w-60 h-20 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 border border-blue-700 rounded">Next</button>
      <div className="mx-auto text-base">1 of 10 questions</div>
    </div>
  )
}

export default Quiz
