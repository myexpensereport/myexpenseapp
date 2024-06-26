import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate, Link, useParams } from 'react-router-dom';
import Header from './../common/header';





const PayoutView = () => {
	
	const {id} =useParams();
	const navigate = useNavigate();
	
	const [data, setData] = useState([]);
	
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
		axios.get('http://localhost:8888/payout/history/'+id)
		.then(res => setData(res.data))
		.catch(err => console.log(err))
		console.log("updateData::"+data.schemeName)
	},[])
	
	
	return (
		<div className = 'container'>
		<Header />
		<h2><center>Payout Deatils</center></h2>
		<table className='table'>
		 	<thead> 
		 	<tr>
		 	<th>SchemeName</th>
		 	<th>InvestAmount</th>
		 	<th>ExpectedAmount</th>
		 	<th>UpdatedDate</th>
		 	</tr>
		 	</thead>
		 	
		 	<tbody>
		 	{data.map((d,i) =>(
				 <tr key ={i}>
				 <td> {d.schemeName}</td>
				 <td> {d.investAmount}</td>
				 <td> {d.expectedAmount}</td>
				 <td> {d.updatedDate}</td>
				 </tr>
				 
			 ))}
		 	</tbody>
		 	 <div> 
				 <Link   to={'/PayoutHome'} className='btn btn-success'>Back</Link>
				 </div>
		 </table>
			
		</div >
	);
}
export default PayoutView;