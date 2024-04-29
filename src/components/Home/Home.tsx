import React from 'react';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center bg-gray-200 p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">
          It's time to demonstrate your skills in the circular economy and recycling
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Take our quiz to test your knowledge and learn more about the circular economy.
        </p>
        <p className="text-lg text-gray-700 mb-4">- 10 questions</p>
        <p className="text-lg text-gray-700 mb-4">- Instant feedback</p>
        <p className="text-lg text-gray-700 mb-4">- Final title </p>
        <a href="/quiz" className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
          Start Quiz
        </a>
      </div>
    </div>
  );
}
