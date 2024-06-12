import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../authservice/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import HomeIcon from './../common/HomeIcon';
import { Link } from 'react-router-dom';

const DailyExpense = () => {

	const url = 'http://localhost:8888/myexpense/getAllExpensesReport/daily'
	const [records, setRecords] = useState([]);
	const [filterRecords, setFilterRecords] = useState([]);
	const [totalAmount, setTotalAmount] = useState([]);

	const column = [
		{

			name: "Expense Name",
			selector: row => row.expenseName,
			sortable: true,


		},
		{
			name: "Category",
			selector: row => row.category,
			sortable: true
		},
		{
			name: "Amount",
			selector: row => row.amount,
			sortable: true
		},
		{
			name: "Created",
			selector: row => row.created,
			sortable: true
		},
		{
			name : "Action",
            cell: row => <button className="btn btn-success" onClick={() => (row.id)} style = {{marginLeft:"1px"}}>Update</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
		}
	]

	const customStyles = {
		headCells: {
			style: {
				fontSize: '15px',
				fontWeight: 'bold',
				paddingLeft: '0 8px',
				justifyContent: 'left',
				backgroundColor: '#00daff',
				maxWidth: 400,
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
					setTotalAmount(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchData();
	}, []);

	const handleFilter = (event) => {
		const newData = filterRecords.filter(row => row.expenseName.toLowerCase().includes(event.target.value.toLowerCase()))
		setRecords(newData);
	}

	function findSumUsingMap() {
		let t = 0;
		const res = totalAmount.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}


	return (
		<div>
			<div><Link tag="a" className="" to="/dashboardpage"><HomeIcon />
                            <i className="fa fa-dashboard"></i> Home
                        </Link></div>
			<div class="p-4 mb-2 bg-success text-white"><b><center> Total Daily Expense : {findSumUsingMap()}</center></b></div>
            <div style={{padding:"10px 20px", justifyContent : 'left'}} >
            <div style={{display:'flex', justifyContent : 'right'}}>
            <input type = "text" placeholder='Search....' onChange = {handleFilter} style={{padding:'6px 10px'}}/> 
            </div>
            <DataTable
            columns={column}
            customStyles = {customStyles}
            data={records}
            pagination
            selectableRows>
           </DataTable>
            </div>
            </div>
	);
}
export default DailyExpense;