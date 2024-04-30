import React from 'react';
import './Home.css';
import {Helmet} from 'react-helmet'
import EconomyImage from '../image/economy.png'

function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <div className="text-center font-bold bg-gray-200 p-8 rounded-lg shadow-md content-container">
        <h1 className="text-4xl font-bold mb-4 lg:text-5xl">
          It's time to demonstrate your skills in the circular economy and recycling
        </h1>
        <p className="text-xl text-gray-700 mb-4 lg:text-2xl">
          Take our quiz to test your knowledge and learn more about the circular economy.
        </p>
        <div className="text-lg text-gray-700 mb-4">
          <p className='mb-4 text-xl'>- 10 questions</p>
          <p className='mb-4 text-xl'> - Instant feedback</p>
          <p className='mb-4 text-xl'>- Final result </p>
        </div>
        <a href="/quiz" className="mt-2 lg:mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl lg:text-2xl py-3 lg:py-4 px-6 lg:px-8 rounded inline-block">
          Start Quiz
        </a>
        <img className='image' src={EconomyImage} alt='Circular Economy Img'/>
      </div>
    </div>
  );
}

export default Home;
