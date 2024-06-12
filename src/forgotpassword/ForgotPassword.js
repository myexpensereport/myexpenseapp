import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../authservice/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import authLayout from "../hoc/authLayout";
import "../assets/css/login.css"

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [otp, setOtp] = useState(0);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const handleForgotPassword = async (e) => {
		e.preventDefault();
		try {
			console.log(email);
			const response = await AuthService.forgotPassword({ email });
			setMessage(response.data);
			if (response.data === 'OTP sent Successfully') {
				navigate('/ForgotPassword');
			}
		} catch (error) {
			setMessage('OTP Validation  Failed');
		}
	};

	const handleValidateOtp = async (e) => {
		e.preventDefault();
		try {
			const response = await AuthService.validateOtp({ email, otp });
			setMessage(response.data);
			if (response.data === 'Entered Otp is valid') {
				navigate('/ResetPassword');
			}
		} catch (error) {
			setMessage('Otp Validation Failed');
		}
	};

	return (
		<>
			<div className="reset-password-section text-center">
				<h5><i className="fa fa-lock fa-4x"></i></h5>
				<h2 className="text-center">Forgot Password?</h2>
				<p>You can reset your password here.</p>
				<div className="panel-body">
 					{message && <div className="alert alert-info">{message}</div>}
					<form  onSubmit={handleForgotPassword}>

						<div className="form-group">
							<span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
							<input id="email" name="email" placeholder="email address" className="form-control form-control-lg" type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)} />
						</div>
						<button type="submit" className="btn btn-primary">Send OTP</button>
					</form>
					{message && <div className="alert alert-info">{message}</div>}
					<form onSubmit={handleValidateOtp}>
						<div className="form-group">
							<span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
							<input id="email" name="email" placeholder="email address" className="form-control form-control-lg" type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								value={otp}
								onChange={(e) => setOtp(e.target.value)}
							/>
						</div>
						<button type="submit" className="btn btn-primary" >Verify OTP</button>

					</form>

				</div>
			</div>
		</>
	);
};
export default authLayout(ForgotPassword);