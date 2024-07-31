import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../authservice/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Header from './../common/header';

const AddSavingPlan = () => {
	const [schemeName, setSchemeName] = useState('');
	const [category, setCategory] = useState('');
	const [investAmount, setInvestAmount] = useState(0);
	const [interestAmount, setTnterestAmount] = useState(0);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const [startDate, setStartDate] = useState(dayjs('02-06-2024'));
	const [endDate, setEndDate] = useState(dayjs('02-06-2024'));

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			console.log(schemeName);
			console.log(investAmount);
			console.log(startDate);
			console.log(endDate);
			const response = await AuthService.addSavingPlan({ schemeName,category, investAmount,interestAmount, startDate, endDate });
			setMessage(response.data);
			if (response.data === 'SavingPlan Add Successfully') {
				navigate('/SavingPlan');
			}
		} catch (error) {
			setMessage('Failed while adding SavingPlan');
		}
	};



	return (
			<div>
			<Header />
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="card">
					<div className="card-header" class="text-primary"><h5>Add Your SavingPlan</h5></div>
						<div className="card-body">
							{message && <div className="alert alert-info">{message}</div>}
							<form onSubmit={handleRegister} style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
								<div>
									<div className="form-group">
										<label>Scheme Name:</label>
										<input
											type="text"
											className="form-control"
											value={schemeName}
											onChange={(e) => setSchemeName(e.target.value)}
										/>
									</div>
									<div className="form-group">
											<label>Select Category </label>
											<select name='option'
												className="form-control" placeholder="Select Category"
												onChange={(e) => setCategory(e.target.value)}>
												<option></option>
												<option value="Gold">Gold</option>
												<option value="ShareMarket">ShareMarket</option>
												<option value="MutualFund">MutualFund</option>
												<option value="Insurance">Insurance</option>
												<option value="NPS">NPS</option>
												<option value="Sukanya">Sukanya</option>
												<option value="TermInsurnace">TermInsurnace</option>
												<option value="FixedDeposit">FixedDeposit</option>
												<option value="Others">Others</option>

											</select>
										</div>
									<div className="form-group">
										<label>Invest Amount:</label>
										<input
											type="text"
											className="form-control"
											value={investAmount}
											onChange={(e) => setInvestAmount(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<label>Interest Amount:</label>
										<input
											type="text"
											className="form-control"
											value={interestAmount}
											onChange={(e) => setTnterestAmount(e.target.value)}
										/>
									</div>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={['DatePicker', 'DatePicker']}>
										<label>Start Date:</label>
											<DatePicker
												value={startDate}
												onChange={(newValue) => setStartDate(newValue)}
											/>
										</DemoContainer>
									</LocalizationProvider>

									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={['DatePicker', 'DatePicker']}>
										<label>End Date :</label>
											<DatePicker
												value={endDate}
												onChange={(newValue) => setEndDate(newValue)}
											/>
										</DemoContainer>
									</LocalizationProvider>
									<button type="submit" className="btn btn-primary">Add SavingPlan</button>
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

export default AddSavingPlan;
