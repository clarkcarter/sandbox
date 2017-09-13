import React from 'react';
import './App.css';

const numbers = [9,100,60,64,50,1024];

const names = ["Clark", "Jim", "Carlo", "Jerry", "Ted"];

const people = [
  {
    name: "Clark",
    age: 33,
    gender: "male"
  },
  {
    name: "Bea",
    age: 30,
    gender: "female"
  },
  {
    name: "Julien",
    age: 32,
    gender: "male"
  }
]

const App = () => {
  return (
    <div>
      {numbers.map((number) =>
        <div className="card">
          <span>{Math.floor(Math.sqrt(number)) * 2}</span>
        </div>
      )}
    </div>
  )
}

export default App;
