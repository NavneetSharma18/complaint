import React,{useState,useEffect} from 'react'
import { useNavigate }  from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from 'react-redux'
import {checkLogin} from '../redux/userApi/';





const Login = ()=>{

    const [email,setEmail]       = useState("");
    const [password,setPassword] = useState("");
    const [error,setError]       = useState(false);
    const navigate               = useNavigate();
    const dispatch               = useDispatch();
    const auth                   = useSelector((state) => state.loginRes.isUserLogin);

    useEffect(()=>{

  		if(auth){
  			navigate('/')
  		}

  	})

    const sendLoginData = async ()=>{

    	if(!email || !password){

    		setError(true);

    		if(error && !email){

    			toast.error('Please enter your email', {
			      position: toast.POSITION.TOP_RIGHT,
			    });
			    return false;
    		}
    		if(error && !password){

    			toast.error('Please enter your password', {
			      position: toast.POSITION.TOP_RIGHT,
			    });
			    return false;
    		}
    		
    		return false;
    		
    	}

    	const data = {email: email,password: password};
        dispatch(checkLogin(data));
   }

	return (
		<>
		<style
		  dangerouslySetInnerHTML={{
			__html:
			  "\nbody{\n\tbackground:linear-gradient(90deg, rgb(240, 202, 128) 0%, rgb(255, 255, 255) 35%, rgb(248, 248, 248) 100%);\n\t\n}\n\n/*body{\n\t\n\tbackground:linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n\tbackground-size: 400% 400%;\n\tanimation: gradient 15s ease infinite;\n\theight: 100vh;\n}*/\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n#captchaimg {\n\tmargin: 0px 0 0 6px;\n\tborder-radius: 8px;\n}\n#refreshcaptcha {\n\tcursor: pointer;\n\tmargin-left: 78%;\n\twidth: 33px;\n\tborder-radius: 11px;\n\tmargin-bottom: -37px;\n}\n"
		  }}
		/>
		
		<div className="container">
		  <div className="row">
			<div className="col-sm-5 col-12 text-center">
			  <div className="loginimg"></div>
			</div>
			<div className="col-sm-7 col-12 mb-2">
			  
			  <div className="col-sm-8 col-12 mb-2">
				<div className="row">
				  <div className="col-sm-6 col-12">
					<h2 className="text-center logintitle">LOGIN HERE</h2>
				  </div>
				</div>
				
			  </div>
			  <div className="col-sm-8 col-12 mb-2">
			  <input
				type="text"
				id="loginform-username"
				className="form-control "
				name="LoginForm[username]"
				placeholder="Username / Email"
				autoComplete="off"
				/>

			  </div>
			  <div className="col-sm-8 col-12 mb-2">
			  <input
				type="password"
				id="loginform-duppassword"
				className="form-control"
				name="LoginForm[duppassword]"
				placeholder="Password"
				autoComplete="off"
				style={{ width: "100%" }}
				/>

			  </div>
			  <div className="col-sm-8 col-12 mb-2">
				<div className="row">
				  <div className="col-sm-6" style={{ marginTop: "-14px" }}>
					<img
					  src= {`${process.env.PUBLIC_URL}/images/refresh.jpg`}
					  alt="Captcha Image"
					  id="refreshcaptcha"
					/>
				  </div>
				  <div className="col-sm-6 col-12 mb-2">
					<input
					  type="text"
					  id="captcha"
					  name="LoginForm[entercaptcha]"
					  className="form-control logincaptcha"
					  placeholder="Captcha"
					  title="Captcha"
					  autoComplete="off"
					  maxLength={5}
					  required=""
					/>
				  </div>
				  <div className="col-sm-12 text-center mb-2">
					<hr />
					<button type="button" className="btn btn-success" id="loginbtn">
					  <i className="bi bi-box-arrow-right" /> Login
					</button>
					<a href="" className="btn btn-danger">
					  <i className="bi bi-arrow-clockwise" /> Reset
					</a>
				  </div>
				</div>
			  </div>
			</div>
			
		  </div>
		</div>
	  </>
	  
	  
	       )

}

export default Login