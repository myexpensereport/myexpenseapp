/*import '../App.css';
import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../authservice/AuthService';
import {useNavigate} from "react-router-dom";


const Home = () => {
	
    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.login({email , password});
            setMessage(response.data);
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
  
 
		
		 return (
		<Container>
			<Row>
				<Col md={12} className="bg-primary text-white p-4">
					<div>
						<nav>
							<div class="p-3 mb-2 bg-success text-white">
								<p class="text-center">My DailyExpense Dashboard </p>
							</div>
						</nav>
					</div>
				</Col>
			</Row>
			<Row>
				<Col md={6} className="bg-primary text-white p-4">

					<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />

				</Col>

				<Col md={6} className="bg-white text-dark p-4">
				{message && <div className="alert alert-info">{message}</div>}
					<form onSubmit={handleLogin}>
						<div data-mdb-input-init class="form-outline mb-4">
							<input type="email" id="form2Example1" class="form-control" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
							<label class="form-label" for="form2Example1">Email address</label>
						</div>

						<div data-mdb-input-init class="form-outline mb-4">
							<input type="password" id="form2Example2" class="form-control" value={password}
                                        onChange={(e) => setPassword(e.target.value) }/>
							<label class="form-label" for="form2Example2">Password</label>
						</div>

						<div class="row mb-4">
							<div class="col d-flex justify-content-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
									<label class="form-check-label" for="form2Example31"> Remember me </label>
								</div>
							</div>

							<div class="text-center">
							  <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1" onClick={redirectToForgotPassword}>Forgot password?</button>
							</div>
						</div>

						<button type="submit" className="btn btn-primary">Sign in</button>

						<div class="text-center">
      						
							<p>Not a member? 
							  <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1" onClick={redirectToRegisterPage}>Register</button></p>
							<p>or sign up with:</p>
							<button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
								<i class="fab fa-facebook-f"></i>
							</button>

							<button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
								<i class="fab fa-google"></i>
							</button>

							<button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
								<i class="fab fa-twitter"></i>
							</button>

							<button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
								<i class="fab fa-github"></i>
							</button>
						</div>
					</form>
				</Col>
			</Row>

			<Row>
				<Col md={12} className="bg-primary text-white p-4">
					<div>
						<nav>
							<div class="p-3 mb-2 bg-success text-white">
								<p class="text-center">Author: Parameswar</p>
								<p class="text-center"><a href="mailto:sp@example.com">sp@example.com</a></p>
							</div>
						</nav>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
	
export default Home;
*/