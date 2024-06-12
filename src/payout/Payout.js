import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../authservice/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import ChartsOverview from '../common/ChartsOverview';
import HomeIcon from '../common/HomeIcon';

import { CSVLink } from "react-csv";

const Payout = () => {

	const url = 'http://localhost:8888/payout/getAllPayout'
	const [records, setRecords] = useState([]);
	const [filterRecords, setFilterRecords] = useState([]);

	const [totalInvestAmount, setTotalInvestAmount] = useState([]);
	const [totalReturnAmount, setTotalReturnAmount] = useState([]);
	
	const [csvData, setCsvData] = useState([]);


	const column = [
		{
			name: "SchemeName",
			selector: row => row.schemeName,
			sortable: true,
		},
		{
			name: "Invest Amount",
			selector: row => row.investAmount,
			sortable: true
		},
		{
			name: "Expected Amount",
			selector: row => row.expectedAmount,
			sortable: true
		},
		{
			name: "Total Return",
			selector: row => (row.interstAmount + row.bonus),
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
		},
		{
			name: "Tenure",
			selector: row => row.tenure,
			sortable: true
		},
		{
			name: "Return Earn Date",
			selector: row => row.returnEarnedDate,
			sortable: true
		},
		{
			name: "Interst Amount",
			selector: row => row.interstAmount,
			sortable: true
		},
		{
			name: "Bonus",
			selector: row => row.bonus,
			sortable: true
		},
		{
			name: "Reedem",
			selector: row => row.redeem,
			sortable: true
		},

		{
			name: "Balance Fund",
			selector: row => row.balanceFund,
			sortable: true
		},
		{
			name: "Status",
			selector: row => row.status,
			sortable: true
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
					console.log(res.data)
					setRecords(res.data)
					setFilterRecords(res.data)
					setTotalInvestAmount(res.data)
					setTotalReturnAmount(res.data)
					setCsvData(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchData();
	}, []);

	const handleFilter = (event) => {
		const newData = filterRecords.filter(row => row.schemeName.toLowerCase().includes(event.target.value.toLowerCase()))
		setRecords(newData);
	}

	function getTotalInvestAmount() {
		let t = 0;
		const res = totalInvestAmount.map(({ investAmount }) => t = t + investAmount);
		console.log("res::::" + res);
		return t;
	}
	function getReturnedAmount() {
		let t = 0;
		const res = totalReturnAmount.map(({ interstAmount }) => t = t + interstAmount);
		console.log("res::::" + res);
		const finalRes = totalReturnAmount.map(({ bonus }) => t = t + bonus);
		console.log("finalRes::::" + finalRes);
		return t;
	}


	return (
		<div>
			<div><Link tag="a" className="" to="/dashboardpage"><HomeIcon />
				<i className="fa fa-dashboard"></i> Home
			</Link></div>
			<div class="bg-success text-white"><b><center> Total InvestedAmount = {getTotalInvestAmount()} | Total ReturnedAmount = {getReturnedAmount()}</center></b></div>
			<div>
				<div>
					<center><h1>Payout Details</h1></center>
				</div>
			</div>
			<div>
				<ChartsOverview />
			</div>
			<div>

			</div>

			<div style={{ padding: "10px 20px", justifyContent: 'left' }} >
				<div style={{ display: 'flex', justifyContent: 'right' }}>
					<input type="text" placeholder='Search....' onChange={handleFilter} style={{ padding: '6px 10px' }} />
	     				 {/* Export Button Start */}
					<div class="bg-danger text-white">
						<CSVLink className="downloadbtn" filename="payout.csv" data={csvData}>
							Export to CSV
						</CSVLink>
					</div>
				</div>
				<DataTable
					columns={column}

					customStyles={customStyles}
					data={records}
					pagination
					selectableRows>
				</DataTable>
			</div>
		</div >
	);
}
export default Payout;