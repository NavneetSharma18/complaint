import React,{useState} from 'react'
import {Link,json,useNavigate} from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from 'react-redux'
import {checkLogout} from '../../redux/userApi/';
import {incProductQty,decProductQty,removeProductCart} from '../../redux/productApi/';

axios.defaults.withCredentials = true


const Navbar = ()=>{

	const auth         = useSelector((state) => state.loginRes.isUserLogin);
  const loginUserId  = useSelector((state) => state.loginRes.userId);
	const userData     = useSelector((state) => state.loginRes.authData);
  const roleId       = useSelector((state) => state.loginRes.userRoleId);

  const cartItems    = useSelector((state) => state.cartItem.cartItems);
  const total        = useSelector((state) => state.cartItem.totalPrice);
  const subTotal     = useSelector((state) => state.cartItem.subTotal);
  const shippingCost = useSelector((state) => state.cartItem.shippingCost);

	const navigate     = useNavigate();
	const dispatch     = useDispatch();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
	
	const logoutUser = ()=>{

		 dispatch(checkLogout());
		 navigate('/login');
	   
	}

 


	return (
            <>
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n  .nb-bar { background: linear-gradient(to right, #2c3e50, #3498db) !important; }\n  li.active { color: #fff !important; background: #c01737 !important; }\n  .Incomplete { background: #dc3545 !important; border-radius: 10px; border-bottom: 4px solid; padding: 10px; font-weight: bold; color: #fff; font-size: 18px; }\n"
                  }}
                />
                <div className="nb-bar mb-4">
                  <div className="container-lg">
                    <div className="row">
                      <div className="col-sm-12">
                        <nav className="navbar1 navbar-expand-md p-0 navbar-light">
                          <button
                            className="navbar-toggler ms-auto"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                          >
                            <span className="navbar-toggler-icon" />
                          </button>
                          <div className=" navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav text-center">
                              <li>
                                <Link to="/">Home</Link>
                              </li>
                              <li>
                               <Link to="/login">Login</Link>
                              </li>
                              <li>
                               <Link to="/login" onClick={logoutUser}>Logout {(userData)?(userData.name):''}</Link>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </>

       
		)
    
	

}

export default Navbar