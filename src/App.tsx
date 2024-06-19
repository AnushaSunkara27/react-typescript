import React from 'react';
import logo from './logo.svg';
import './App.css';

let name: string = 'Anusha';
let age: number = 20;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let personName: any; // any type
let personAge: unknown;

type Person = {
  name: string;
  age?: number;   // optional 
}

let person: Person = {
  name: 'anusha',
  age: 5
}

function App() {
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
