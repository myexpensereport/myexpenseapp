import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate, Link, useParams } from 'react-router-dom';
import Header from './../common/header';

import PayoutBarChart from '../common/PayoutBarChart';

import { CSVLink } from "react-csv";



const PayoutView = () => {
	
	const {id} =useParams();
	const navigate = useNavigate();
	
	const [data, setData] = useState([]);
	const [totalReturnAmount, setTotalReturnAmount] = useState([]);
	
	console.log("data is::"+data.schemeName)
	
	/*useEffect(() => {
		const fetchData = async () => {
			axios.get('http://localhost:8888/payout/history/'+id)
				.then(res => {
					setData(res.data)
					
				})
				.catch(err => console.log(err));
		}
		fetchData();
	}, []);*/
		useEffect(() => {
		console.log("GetbyID is ::"+id)
		axios.get('http://localhost:8888/payout/schemeHistory/'+id)
		.then(res => setData(res.data))
		.catch(err => console.log(err))
		console.log("updateData::"+data.schemeName)
	},[])
	
	function getReturnedAmount() {
		let t = 0;
		const res = data.map(({ interstAmount }) => t = t + interstAmount);
		console.log("res::::" + res);
		const finalRes = data.map(({ bonus }) => t = t + bonus);
		console.log("getReturnedAmount::::" + finalRes);
		return t;
	}
	function getTotalInvestAmount() {
		const res = data.map(({ investAmount }) =>  investAmount);
		console.log("investAmount::::" + res);
	}
	
	return (
		<div className = 'container'>
		<Header />
		<div>
				<div class="bg-success text-white"><b><center> Total Returned Amount = {getReturnedAmount()} </center></b></div>
			
			</div>
		<h2><center>Payout Deatils</center></h2>
		<div><CSVLink  className="downloadbtn btn-danger" filename="SchemePayout.csv" data={data}>Export to CSV
			</CSVLink>
		</div>
		<table className='table'>
		 	<thead> 
		 	<tr>
		 	<th>SchemeName</th>
		 	<th>Invest Amount</th>
		 	<th>Expected Amount</th>
		 	<th>Tenure</th>
		 	<th>Interst Amount</th>
		 	<th>Reedem</th>
		 	<th>Bonus</th>
		 	<th>Start Date</th>
		 	<th>End Date</th>
		 	<th>Return Earn Date</th>
		 	<th>UpdatedDate</th>
		 	</tr>
		 	</thead>
		 	
		 	<tbody>
		 	{data.map((d,i) =>(
				 <tr key ={i}>
				  <td> {d.schemeName}</td>
				 <td> {d.investAmount}</td>
				 <td> {d.expectedAmount}</td>
				 <td> {d.tenure}</td>
				 <td> {d.interstAmount}</td>
				 <td> {d.redeem}</td>
				 <td> {d.bonus}</td>
				 <td> {d.startDate}</td>
				 <td> {d.endDate}</td>
				 <td> {d.returnEarnedDate}</td>
				 <td> {d.updatedDate}</td>
				 </tr>
				 
			 ))}
		 	</tbody>
		 	 <div> 
				 <Link   to={'/PayoutDashboard'} className='btn btn-success text-white'>Back</Link>
				 </div>
		 </table>
			
		</div >
	);
}
export default PayoutView;