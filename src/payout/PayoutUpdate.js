import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';






const PayouUpdate = () => {
	
	const {id} =useParams();
	
	useEffect(() => {
		console.log("GetbyID is ::"+id)
		axios.get('http://localhost:8888/payout/'+id)
		.then(res => setInputData(res.data))
		.catch(err => console.log(err))
		console.log("updateData::"+setInputData)
	},[])
	
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
		console.log("updatebyID is ::"+id)
		axios.put('http://localhost:8888/payout/'+id,inputData)
		.then(res =>{
			alert("Data Update succesfuly");
			navigate('/PayoutHome');
		})
	}
	
	
	return (
		<div className='d-flex w-90 vh-90 justify-content-center align-items-center'>
			<div className='w-50 border bg-secondary text-white p-5'>
				<form onSubmit={handleSubmit}>
					<div>
						<lable htmlFor='schemeName'>Scheme Name:</lable>
						<input type='text' name='schemeName' className='form-control' value= {inputData.schemeName}
						onChange={e => setInputData({...inputData,schemeName:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='investAmount'>invest Amount:</lable>
						<input type='text' name='investAmount' className='form-control' value= {inputData.investAmount}
						onChange={e => setInputData({...inputData,investAmount:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='expectedAmount'>Expected Amount:</lable>
						<input type='text' schemeName='expectedAmount' className='form-control' value= {inputData.expectedAmount}
						onChange={e => setInputData({...inputData,expectedAmount:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='tenure'>Tenure:</lable>
						<input type='text' name='tenure' className='form-control' value= {inputData.tenure}
						onChange={e => setInputData({...inputData,tenure:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='interstAmount'>Interst Amount:</lable>
						<input type='text' name='interstAmount' className='form-control'value= {inputData.interstAmount}
						onChange={e => setInputData({...inputData,interstAmount:e.target.value})}  />
					</div>
					<div>
						<lable htmlFor='redeem'>Redeem:</lable>
						<input type='text' name='redeem' className='form-control' value= {inputData.redeem}
						onChange={e => setInputData({...inputData,redeem:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='bonus'>Bonus:</lable>
						<input type='text' name='bonus' className='form-control' value= {inputData.bonus}
						onChange={e => setInputData({...inputData,bonus:e.target.value})}  />
					</div>
					<div>
						<lable htmlFor='totalEarned'>TotalEarned:</lable>
						<input type='text' name='totalEarned' className='form-control' value= {inputData.totalEarned}
						onChange={e => setInputData({...inputData,totalEarned:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='balanceFund'>BalanceFund:</lable>
						<input type='text' name='balanceFund' className='form-control' value= {inputData.balanceFund}
						 onChange={e => setInputData({...inputData,balanceFund:e.target.value})} />
					</div>
					
					<div>
					<lable >StartDate:</lable>
                        <div className="col-6 mb-3">
                            <input name="startDate" type="date" className='form-control' value= {inputData.startDate}
                            onChange={e => setInputData({...inputData,startDate:e.target.value})}   />
                        </div>
                    </div>
                    
                    <div>
                    <lable>EndDate:</lable>
                        <div className="col-6 mb-3">
                            <input name="endDate" type="date" className='form-control' value= {inputData.endDate}
                            onChange={e => setInputData({...inputData,endDate:e.target.value})}   />
                        </div>
                    </div>
                    
                    <div>
                    <lable>ReturnEarnedDate:</lable>
                        <div className="col-6 mb-3">
                            <input name="returnEarnedDate" type="date" className='form-control' value= {inputData.returnEarnedDate}
                            onChange={e => setInputData({...inputData,returnEarnedDate:e.target.value})}   />
                        </div>
                    </div>
					
					<button className='btn btn-info center'>submit</button>
				</form>

			</div>

		</div>
	);
}
export default PayouUpdate;