import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../authservice/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '../common/HomeIcon';
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
							<div className="card-header">Add Your Expenses</div>
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
												<option value="VegetablesAndFruits">Fruits&Vegetable</option>
												<option value="Groceries">Groceries</option>
												<option value="Food">NonVeg</option>
												<option value="Food">OutSideFood</option>
												<option value="Entertainment">Entertainment</option>
												<option value="Maintaince">Maintaince</option>
												<option value="Utilities">Utilities</option>
												<option value="Sports">Sports</option>
												<option value="Gift">Gift</option>
												<option value="EMI">Emi</option>
												<option value="Insurance">Life Insurance</option>
												<option value="Hospital">Hospital</option>
												<option value="School">School Fee</option>
												<option value="Shopping">Shopping</option>

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
