/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import Header from './../common/header';

const PayoutHome = () => {

	const url = 'http://localhost:8888/payout/getAllPayout'
	const [data, setData] = useState([]);


	useEffect(() =>{
				axios.get(url)
				.then(response => setData(response.data))
				.catch(err => console.log(err))
					
	},[])

 const navigate = useNavigate();

 function handleDelete(id){
		const confirm = window.confirm("Do you want to delete payout")
		if(confirm){
		axios.delete('http://localhost:8888/payout/'+id)
		.then(res =>{
			alert("Payout Deleted");
			navigate('/PayoutHome');
			
		})	
		}
		
	}


	return (
		<div className = 'container'>
		<Header />
		<Link to ='/PayoutCreate' className='btn btn-success my-3'>Create+</Link>
		<table className='table'>
		 	<thead> 
		 	<tr>
		 	<th>ID</th>
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
		 	<th>Action</th>
		 	</tr>
		 	</thead>
		 	
		 	<tbody>
		 	{data.map((d,i) =>(
				 <tr key ={i}>
				 <td> {d.id}</td>
				 <td><Link   to={'/PayoutView/'+d.id} class="text-decoration-underline text-primary">{d.schemeName}</Link></td>
				 <td> {d.investAmount}</td>
				 <td> {d.expectedAmount}</td>
				 <td> {d.tenure}</td>
				 <td> {d.interstAmount}</td>
				 <td> {d.redeem}</td>
				 <td> {d.bonus}</td>
				 <td> {d.totalEarned}</td>
				 <td> {d.balanceFund}</td>
				 <td> {d.startDate}</td>
				 <td> {d.endDate}</td>
				 <td> {d.returnEarnedDate}</td>
				 <td> 
				 <Link   to={'/PayoutUpdate/'+d.id} className='text-decoration-none btn bt-sm btn-success'>Update</Link>
				 <button className='text-decoration-none btn bt-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>
				
				 </td>
				 
				 </tr>
				 
			 ))}
		 	</tbody>
		 </table>
			
		</div >
	);
}
export default PayoutHome;