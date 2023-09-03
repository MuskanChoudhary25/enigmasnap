// import logo from './logo.svg';
import React , {useState , useEffect} from 'react';
import './App.css';
import Home from './Mycomponent/Home';
import Encryption from './Mycomponent/Encryption';
import Decryption from './Mycomponent/Decryption';
import {Routes, Route } from "react-router-dom";

function App() { 
  const [data , setData] = useState([{}])
  useEffect(() => {
    fetch("/encrypt").then(
      res => res.json()
    ).then(
      data => {setData(data)
        console.log(data)
      }
    )
  } , []
  )
  return (       
    <>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/Encryption" element={<Encryption/>}></Route>
      <Route exact path="/Decryption" element={<Decryption/>}></Route>              
    </Routes>
   
    </>
    
  );
}

export default App;

