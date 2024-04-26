import React, { useState, useRef } from 'react';
import './Quiz.css';
import { data } from '../../Assets/data';

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);

  const optionRefs = [
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null)
  ];

  const checkAns = (ans: number, optionIndex: number) => {
    if (!lock) {
      if (question.ans === ans) {
        optionRefs[optionIndex].current?.classList.add("correct");
        setLock(true);
      } else {
        optionRefs[optionIndex].current?.classList.add("wrong");
        setLock(true);
        optionRefs[question.ans - 1].current?.classList.add("correct");
      }
    }
  };

  return (
    <div className="container max-w-4xl mx-auto mt-24 bg-white text-gray-800 flex flex-col gap-8 rounded-lg p-6">
      <h2>Let's see if you are prepared &#129303;</h2>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li ref={optionRefs[0]} onClick={() => checkAns(1, 0)}>{question.option1}</li>
        <li ref={optionRefs[1]} onClick={() => checkAns(2, 1)}>{question.option2}</li>
        <li ref={optionRefs[2]} onClick={() => checkAns(3, 2)}>{question.option3}</li>
        <li ref={optionRefs[3]} onClick={() => checkAns(4, 3)}>{question.option4}</li>
      </ul>
      <button className="w-60 h-20 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 border border-blue-700 rounded">Next</button>
      <div className="mx-auto text-base">1 of 10 questions</div>
    </div>
  );
};

export default Quiz;

