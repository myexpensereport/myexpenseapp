import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../authservice/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SavingPlan from '../saving/SavingPlan';
import HomeIcon from '../common/HomeIcon';


const AddSavingPlan = () => {
	const [schemeName, setSchemeName] = useState('');
	const [investAmount, setInvestAmount] = useState(0);
	const [intrestAmount, setIntrestAmount] = useState(0);
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
			const response = await AuthService.addSavingPlan({ schemeName, investAmount,intrestAmount, startDate, endDate });
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
			<div><Link tag="a" className="" to="/dashboardpage"><HomeIcon />
				<i className="fa fa-dashboard"></i> Home
			</Link></div>
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="card">
						<div className="card-header">Add Your SavingPlan</div>
						<div className="card-body">
							{message && <div className="alert alert-info">{message}</div>}
							<form onSubmit={handleRegister} style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
								<div>
									<div className="form-group">
										<label>Scheme Name</label>
										<input
											type="text"
											className="form-control"
											value={schemeName}
											onChange={(e) => setSchemeName(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<label>Invest Amount </label>
										<input
											type="text"
											className="form-control"
											value={investAmount}
											onChange={(e) => setInvestAmount(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<label>Intrest Amount </label>
										<input
											type="text"
											className="form-control"
											value={intrestAmount}
											onChange={(e) => setIntrestAmount(e.target.value)}
										/>
									</div>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={['DatePicker', 'DatePicker']}>
											<DatePicker
												label="Controlled picker"
												value={startDate}
												onChange={(newValue) => setStartDate(newValue)}
											/>
										</DemoContainer>
									</LocalizationProvider>

									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={['DatePicker', 'DatePicker']}>
											<DatePicker
												label="Controlled picker"
												value={endDate}
												onChange={(newValue) => setEndDate(newValue)}
											/>
										</DemoContainer>
									</LocalizationProvider>
									

									<button type="submit" className="btn btn-primary">Add SavingPlan</button>
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
