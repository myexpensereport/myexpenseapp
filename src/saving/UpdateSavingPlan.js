import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
import Header from './../common/header';



const UpdateSavingPlan = () => {
	
	const {id} =useParams();
	
	useEffect(() => {
		console.log("GetbyID is ::"+id)
		axios.get('http://localhost:8888/myexpense/'+id)
		.then(res => setInputData(res.data))
		.catch(err => console.log(err))
		console.log("updateData::"+setInputData)
	},[])
	
	const [inputData , setInputData] = useState({
		schemeName: '',
		investAmount: 0,
		interestAmount: 0,
		category: '',
		startDate:  new Date(),
		endDate: new Date(),
		
		
		
	})
	
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("updatebyID is ::"+id)
		axios.put('http://localhost:8888/myexpense/'+id,inputData)
		.then(res =>{
			alert("Data Update succesfuly");
			navigate('/SavingPlan');
		})
	}
	
	
	return (
		<div><Header />
		<h2><center>SavingPlan Update</center></h2>
		<div className='d-flex w-90 vh-90 justify-content-center align-items-center'>
			<div className='w-50 border bg-secondary text-white p-5'>
				<form onSubmit={handleSubmit}>
					<div>
						<lable htmlFor='schemeName'>Scheme Name:</lable>
						<input type='text' name='schemeName' className='form-control' value= {inputData.schemeName}
						onChange={e => setInputData({...inputData,schemeName:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='investAmount'>Invest Amount:</lable>
						<input type='text' name='investAmount' className='form-control' value= {inputData.investAmount}
						onChange={e => setInputData({...inputData,investAmount:e.target.value})} />
					</div>
					<div>
						<lable htmlFor='interestAmount'>Interest Amount:</lable>
						<input type='text' name='interestAmount' className='form-control'value= {inputData.interestAmount}
						onChange={e => setInputData({...inputData,interestAmount:e.target.value})}  />
					</div>
					<div>
						<lable htmlFor='redeem'>Category:</lable>
						<input type='text' name='category' className='form-control' value= {inputData.category}
						onChange={e => setInputData({...inputData,redeem:e.target.value})} />
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
					
					<button className='btn btn-info center'>submit</button>
				</form>

			</div>
</div>
		</div>
	);
}
export default UpdateSavingPlan;