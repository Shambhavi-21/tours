
import './App.css';
import { useState } from "react";
import Header from './components/Header';
import Home from './components/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ToastContainer position='top-right'/>
      

    </div>
    
  );
}


export default App;
