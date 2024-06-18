import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate, Link, useParams } from 'react-router-dom';
import Header from './../common/header';





const PayoutView = () => {
	
	const {id} =useParams();
	const navigate = useNavigate();
	
	const [data, setData] = useState([]);
	
	useEffect(() => {
		console.log("GetbyID is ::"+id)
		axios.get('http://localhost:8888/payout/'+id)
		.then(res => setData(res.data))
		.catch(err => console.log(err))
		console.log("updateData::"+setData)
	},[])
	
	
	
	return (
		<div className = 'container'>
		<Header />
		<h2><center>Payout Deatils</center></h2>
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
		 	<th>Total Returned</th>
		 	<th>Balance Fund</th>
		 	<th>Start Date</th>
		 	<th>End Date</th>
		 	<th>Return Earn Date</th>
		 	</tr>
		 	</thead>
		 	
		 	<tbody>
				 <td> {data.schemeName}</td>
				 <td> {data.investAmount}</td>
				 <td> {data.expectedAmount}</td>
				 <td> {data.tenure}</td>
				 <td> {data.interstAmount}</td>
				 <td> {data.redeem}</td>
				 <td> {data.bonus}</td>
				 <td> {data.totalEarned}</td>
				 <td> {data.balanceFund}</td>
				 <td> {data.startDate}</td>
				 <td> {data.endDate}</td>
				 <td> {data.returnEarnedDate}</td>
				 
		 	</tbody>
		 	 <div> 
				 <Link   to={'/PayoutHome'} className='btn btn-success'>Back</Link>
				 </div>
		 </table>
			
		</div >
	);
}
export default PayoutView;