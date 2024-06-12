import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../authservice/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.resetPassword({ email,password,repeatPassword});
            setMessage(response.data);
            if (response.data === 'Reset Password Successfully') {
                navigate('/');
            }
        } catch (error) {
            setMessage('Reset Password Failed');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Reset Password</div>
                        <div className="card-body">
                            {message && <div className="alert alert-info">{message}</div>}
                            <form onSubmit={handleResetPassword}>
                               
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
                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ResetPassword;