import React,{useState,useEffect} from 'react'
import { useNavigate }  from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from 'react-redux'
import {addProductToCart} from '../../redux/productApi/';

import axios from 'axios';
axios.defaults.withCredentials = true


const Home = ()=>{

	const  navigate               = useNavigate();
	const [products,setProducts]  = React.useState([]);
	const auth                    = useSelector((state) => state.loginRes.userId);
	const dispatch                = useDispatch();
	const API_BASE_URL            = process.env.REACT_APP_API_BASE_URL
 

	

	return (

			<>
			<h2>Home page</h2>
			</>
	)

}

export default Home