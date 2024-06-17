import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate, Link } from 'react-router-dom';
import HomeIcon from '../common/HomeIcon';

import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  form: {
    padding: "10px 0",
    margin: "30px 0 ",
    display: "block"
  },
  root: {
    padding: "15px 30px"
  }
}));

const PayouCreate = () => {
	
	const [inputData , setInputData] = useState({
		schemeName: '',
		investAmount: 0,
		expectedAmount: 0,
		tenure: 0,
		interstAmount: 0,
		redeem: 0,
		bonus: 0,
		totalEarned: 0,
		balanceFund: 0,
		startDate:  new Date(),
		endDate: new Date(),
		returnEarnedDate: new Date(),
		
		
	})
	
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post('http://localhost:8888/payout/addPayout',inputData)
		.then(res =>{
			alert("Data insert succesfuly");
			navigate('/PayoutHome');
		})
	}
	
	return (
		<div>
		<div><Link tag="a" className="" to="/dashboardpage"><HomeIcon />
				<i className="fa fa-dashboard"></i> Home
			</Link>
			<h5><center>Payout Create</center> </h5>
			</div>
			
		<div className='d-flex w-90 vh-90 justify-content-center align-items-center'>
			<div className='w-50 border bg-secondary text-white p-5'>
				<form onSubmit={handleSubmit}>
					<div>
						<lable htmlFor='schemeName'>Scheme Name:</lable>
						<input type='text' name='schemeName' className='form-control' 
						onChange={e => setInputData({...inputData,schemeName:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='investAmount'>invest Amount:</lable>
						<input type='text' name='investAmount' className='form-control' 
						onChange={e => setInputData({...inputData,investAmount:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='expectedAmount'>Expected Amount:</lable>
						<input type='text' schemeName='expectedAmount' className='form-control' 
						onChange={e => setInputData({...inputData,expectedAmount:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='tenure'>Tenure:</lable>
						<input type='text' name='tenure' className='form-control' 
						onChange={e => setInputData({...inputData,tenure:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='interstAmount'>Interst Amount:</lable>
						<input type='text' name='interstAmount' className='form-control'
						onChange={e => setInputData({...inputData,interstAmount:e.target.value})}  />
					</div>
					<div>
						<lable htmlFor='redeem'>Redeem:</lable>
						<input type='text' name='redeem' className='form-control' 
						onChange={e => setInputData({...inputData,redeem:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='bonus'>Bonus:</lable>
						<input type='text' name='bonus' className='form-control'
						onChange={e => setInputData({...inputData,bonus:e.target.value})}  />
					</div>
					<div>
						<lable htmlFor='totalEarned'>TotalEarned:</lable>
						<input type='text' name='totalEarned' className='form-control' 
						onChange={e => setInputData({...inputData,totalEarned:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='balanceFund'>BalanceFund:</lable>
						<input type='text' name='balanceFund' className='form-control' 
						 onChange={e => setInputData({...inputData,balanceFund:e.target.value})} />
					</div>
					
					<div>
					<lable >StartDate:</lable>
                        <div className="col-6 mb-3">
                            <input name="startDate" type="date" className='form-control'
                            onChange={e => setInputData({...inputData,startDate:e.target.value})}   />
                        </div>
                    </div>
                    
                    <div>
                    <lable>EndDate:</lable>
                        <div className="col-6 mb-3">
                            <input name="endDate" type="date" className='form-control'
                            onChange={e => setInputData({...inputData,endDate:e.target.value})}   />
                        </div>
                    </div>
                    
                    <div>
                    <lable>ReturnEarnedDate:</lable>
                        <div className="col-6 mb-3">
                            <input name="returnEarnedDate" type="date" className='form-control'
                            onChange={e => setInputData({...inputData,returnEarnedDate:e.target.value})}   />
                        </div>
                    </div>
					
					<button className='btn btn-info center'>submit</button>
				</form>

			</div>
</div>
		</div>
	);
}
export default PayouCreate;