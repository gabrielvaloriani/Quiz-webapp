import React, { useState, useRef } from 'react';
import './Quiz.css';
import { data } from '../../Assets/data';

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let[score, setScore] = useState(0)
  let [result, setResult] = useState(false)


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
        setScore(prev=>prev + 1)
      } else {
        optionRefs[optionIndex].current?.classList.add("wrong");
        setLock(true);
        optionRefs[question.ans - 1].current?.classList.add("correct");
      }
    }
  };

  const next = ()  => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true)
        return 0
      }
      setIndex(++index)
      setQuestion(data[index])
      setLock(false)
      optionRefs.forEach((option) => {
        option.current?.classList.remove("wrong")
        option.current?.classList.remove("correct")
      })
    }
  }

  const reset = () => {
    setIndex(0)
    setQuestion(data[0])
    setScore(0)
    setLock(false)
    setResult(false)
  }

  const skill = (): string => {
    if (score <= 4 ) {
      return "Come on man you are better than this! 🤨"
    } else if (score > 4 && score < 6) {
      return "Almost there buddy but you have to know a little bit more 🤔 "
    }else if (score > 6 && score <= 8) {
      return "You're good but not great yet 😜 "
    }else {
      return "You're good but not great yet 😝 "
    }
  }

  return (
    <div className="container max-w-4xl mx-auto mt-24 bg-white text-gray-800 flex flex-col gap-8 rounded-lg p-6">
      <h2>Let's see if you are prepared &#129303;</h2>
      <hr />
      {result?<></>:
      
      <>
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li ref={optionRefs[0]} onClick={() => checkAns(1, 0)}>{question.option1}</li>
        <li ref={optionRefs[1]} onClick={() => checkAns(2, 1)}>{question.option2}</li>
        <li ref={optionRefs[2]} onClick={() => checkAns(3, 2)}>{question.option3}</li>
        <li ref={optionRefs[3]} onClick={() => checkAns(4, 3)}>{question.option4}</li>
      </ul>
      <button className="w-60 h-20 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 border border-blue-700 rounded" onClick={next}>Next</button>
      <div className="mx-auto text-base">{index + 1} of {data.length} questions</div>
      </>}
      {result?<>
        <h2>You scored {score} out of {data.length}</h2>
        <h2>{skill()}</h2>
        <button className="w-60 h-20 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 border border-blue-700 rounded" onClick={reset}>Retry</button>
      
      </>:<></>}
    </div> 
  );
};

export default Quiz;

