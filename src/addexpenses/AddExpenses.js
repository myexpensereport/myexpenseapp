import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import AuthService from '../authservice/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './../common/header';

const AddExpenses = () => {
	const [expenseName, setExpenseName] = useState('');
	const [category, setCategory] = useState('');
	const [amount, setAmount] = useState(0);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const response = await AuthService.addExpense({ expenseName, category, amount });
			setMessage(response.data);
			if (response.data === 'Expenses Add Successfully') {
				navigate('/DashboardPage');
			}
		} catch (error) {
			setMessage('Failed while adding Expenses');
		}
	};



	return (
		<div>
			 <Header />
			 
			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card">
						
							<div className="card-header" class="text-primary"><h5>Add Your Expenses</h5></div>
							<div className="card-body">
								{message && <div className="alert alert-info">{message}</div>}
								<form onSubmit={handleRegister} style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
									<div>
										<div className="form-group">
											<label>Expense Name</label>
											<input
												type="text"
												className="form-control"
												value={expenseName}
												onChange={(e) => setExpenseName(e.target.value)}
											/>
										</div>
										<div className="form-group">
											<label>Select Category </label>
											<select name='option'
												className="form-control" placeholder="Select Category"
												onChange={(e) => setCategory(e.target.value)}>
												<option></option>
												<option value="HomeExepnse">HomeExepnse</option>
												<option value="EMI">Emi</option>
												<option value="MutualFund">MutualFund</option>
												<option value="Investment">Investment</option>
												<option value="Shopping">Shopping</option>
												<option value="Others">Others</option>

											</select>
										</div>
										<div className="form-group">
											<label>Amount </label>
											<input
												type="text"
												className="form-control"
												value={amount}
												onChange={(e) => setAmount(e.target.value)}
											/>
										</div>
										<button type="submit" className="btn btn-primary">Add Expense</button>
										<Link   to={'/DashboardPage'} className='btn btn-danger'>Cancel</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddExpenses;
