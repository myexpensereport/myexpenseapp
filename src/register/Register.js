import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../authservice/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.register({ name, email, password,repeatPassword });
            setMessage(response.data);
            if (response.data === 'User registered successfully') {
                navigate('/');
            }
        } catch (error) {
            setMessage('Registration failed');
        }
    };
    
    const redirectToLoginPage = () => {
    navigate('/'); // Redirect to the '/Login' page
  };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Registration</div>
                        <div className="card-body">
                            {message && <div className="alert alert-info">{message}</div>}
                            <form onSubmit={handleRegister}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                               
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Repeat Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={repeatPassword}
                                        onChange={(e) => setRepeatPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                            <div className="mt-3">
                            <p className="small fw-bold mt-2 pt-1 mb-0">Already registered?  <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1" onClick={redirectToLoginPage}>Login here</button></p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponent;


