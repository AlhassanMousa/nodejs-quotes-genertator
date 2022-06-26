import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


function App() {
  const [quote,setQuote]=useState('');

  useEffect(()=>{
    fetchQuote()
   },[])
 
   
   const fetchQuote=()=>{
     axios.get('https://api.adviceslip.com/advice').then((response)=>{
     console.log(response.data.slip.advice);
     setQuote(response.data.slip.advice)
     }
   )
 }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='container'>
      <span className='item'><h2 className='font'>{quote}</h2><button onClick={()=>{
        fetchQuote()
      }} className='glow-on-hover'>click me</button><div></div></span>
    </div>
      </header>
    </div>
  );
}

export default App;


git add .

