import React, { useState } from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";
import AuthService from '../../authservice/AuthService';
import {useNavigate} from "react-router-dom";

const LoginPage = () =>{
	
	const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.login({name,email});
            setMessage(response.data);
             const userData = {name,
            email,
        };
            localStorage.setItem(
            "token-info",
            JSON.stringify(userData)
        );
        setEmail("");
        setPassword("");
            if (response.data === 'Login successful') {
                navigate('/DashboardPage');
            }
        } catch (error) {
            setMessage('Login failed');
        }
    };

  
  const redirectToForgotPassword = () => {
    navigate('/ForgotPassword'); // Redirect to the '/ForgotPassword' page
  };
  
  const redirectToRegisterPage = () => {
    navigate('/Register'); // Redirect to the '/Register' page
  };

        return( <>
        {message && <div className="alert alert-info">{message}</div>}
            <form className="login-form" onSubmit={handleLogin}>
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
                </div>
                 <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Useer Name</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a user name" value={name}
                                        onChange={(e) => setName(e.target.value)}/>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password"  value={password}
                                        onChange={(e) => setPassword(e.target.value) } />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                    </label>
                    </div>
                    <div class="text-center">
							  <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1" onClick={redirectToForgotPassword}>Forgot password?</button>
					</div>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?  <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1" onClick={redirectToRegisterPage}>Register</button></p> 
                </div>
            </form>
        </>
    )

}
export default authLayout(LoginPage);