import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../authservice/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const PayoutAddAndUpdate = () => {

	const url = 'http://localhost:8888/myexpense/getAllSavingPlan'
	const [records, setRecords] = useState([]);
	const [filterRecords, setFilterRecords] = useState([]);
	const [deleteRecords, setDeleteRecords] = useState([]);
	const [updateRecords, setUpdaterRecords] = useState([]);


	const column = [
		{

			name: "SchemeName",
			selector: row => row.schemeName,
			sortable: true
		},
		{
			name: "Ivenset Amount",
			selector: row => row.investAmount,
			sortable: true
		},
		{
			name: "Intrest Amount",
			selector: row => row.intrestAmount,
			sortable: true
		},
		{
			name: "Start Date",
			selector: row => row.startDate,
			sortable: true
		},
		{
			name: "End Date",
			selector: row => row.endDate,
			sortable: true
		
		}
		/*{
			name: "DeleteAction",
			cell : (row)=> <button className ='btn btn-primary' onClick={handleUpdate()} > Edit </button>
		},
		{
			name: "UpdateAction",
			cell : (row)=> <button className ='btn btn-primary' onClick={handleDelete()} > Delete </button>
		}*/
	]

	const customStyles = {
		headCells: {
			style: {
				fontSize: '15px',
				fontWeight: 'bold',
				paddingLeft: '0 8px',
				justifyContent: 'left',
				backgroundColor: '#00daff',
				maxWidth: 300,
				minWidth: 50,
				width: 120
			},
		},
	}
	useEffect(() => {
		const fetchData = async () => {
			axios.get(url)
				.then(res => {
					setRecords(res.data)
					setFilterRecords(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchData();
	}, []);

	const handleFilter = (event) => {
		const newData = filterRecords.filter(row => row.expenseName.toLowerCase().includes(event.target.value.toLowerCase()))
		setRecords(newData);
	}
	/*const handleDelete = (event) => {
		const newData = deleteRecords.filter((row) => row.schemename !== event)
		setRecords(newData);
	}
	const handleUpdate = (event) => {
		const newData = deleteRecords.filter(row => row.expenseName.toLowerCase().includes(event.target.value.toLowerCase()))
		setRecords(newData);
	}*/

	return (
		<div>
			<div>
				<Link to="/DashboardPage">
					<img alt="Alt content"/><h1>Home</h1>
				</Link>
				<div>
					<center><h1>Payout Details</h1></center>
				</div>
			</div>
			<div style={{ padding: "10px 20px", justifyContent: 'left' }} >
				<div style={{ display: 'flex', justifyContent: 'right' }}>
					<input type="text" placeholder='Search....' onChange={handleFilter} style={{ padding: '6px 10px' }} />
				</div>
				<DataTable
					columns={column}

					customStyles={customStyles}
					data={records}
					pagination
					selectableRows
					selecttabselectableRowsHighlight
					highlightOnHover
					/*actions = {<button className ='btn btn-sm btm-info' > Export </button>} */
					>
				</DataTable>
			</div>
		</div >
	);
}
export default PayoutAddAndUpdate; 