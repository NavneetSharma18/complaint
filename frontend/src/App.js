import './App.css';
import logo                           from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React,{useState,useEffect} from 'react'
import { ToastContainer, toast }      from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar            from  './components/Layout/Navbar';
import Header            from  './components/Layout/Header';
import Footer            from  './components/Layout/Footer';
import Signup            from  './components/Signup';
import Login             from  './components/Login';

import Home              from  './components/User/Home';
import Thankyou          from  './components/User/Thankyou';
import Orders            from './components/User/Orders';


import AddProduct        from  './components/Admin/Product/AddProduct';
import AllProduct        from  './components/Admin/Product/AllProducts';
import UpdateProduct     from  './components/Admin/Product/UpdateProduct';
import PrivateComponents from  './components/PrivateComponents';

function App() {


  const auth       = localStorage.getItem('user')
  const [nodeapiurl,setNodeapiurl]  = useState("");
  
  useEffect(()=>{

      setNodeapiurl(process.env.REACT_APP_NODE_API_URL);
    })


  return (

    <div className="App">
     <BrowserRouter>
       <Header/>
       <Navbar/>
       
        <Routes>
      
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<h1>Logout User</h1>} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
        <ToastContainer />
    </div>
  );
}

export default App;
