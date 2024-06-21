import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Header from './../common/header';
import { CSVLink } from "react-csv";

const SavinPlan = () => {

	const url = 'http://localhost:8888/myexpense/getAllSavingPlan'
	const [records, setRecords] = useState([]);
	const [filterRecords, setFilterRecords] = useState([]);


	const [totalInvestAmount, setTotalInvestAmount] = useState([]);
	const [totalInterestAmount, setTotalInterestAmount] = useState([]);
	const [csvData, setCsvData] = useState([]);


	const column = [
		{

			name: "SchemeName",
			selector: row => row.schemeName,
			Link: true,
			sortable: true
		},
		{
			name: "Invest Amount",
			selector: row => row.investAmount,
			sortable: true
		},
		{
			name: "Interest Amount",
			selector: row => row.interestAmount,
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

			name: "Status",
			selector: row => row.status,
			sortable: true
		},
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
					setTotalInvestAmount(res.data)
					setTotalInterestAmount(res.data)
					setCsvData(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchData();
	}, []);

	const handleFilter = (event) => {
		const newData = filterRecords.filter(row => row.expenseName.toLowerCase().includes(event.target.value.toLowerCase()))
		setRecords(newData);
	}
	
	function getTotalInvestAmount() {
		let t = 0;
		const res = totalInvestAmount.map(({ investAmount }) => t = t + investAmount);
		return t;
	}
	function getTotalInterestAmount() {
		let t = 0;
		const res = totalInterestAmount.map(({ interestAmount }) => t = t + interestAmount);
		return t;
	}

	return (
		<div>
		<Header />
				<div>
					<center><h1 class="text-primary">SavingPlan Details</h1></center>
				</div>
				<div class="bg-success text-white"><b><center> Total InvestedAmount = {getTotalInvestAmount()} | Total InterestAmount = {getTotalInterestAmount()}</center></b></div>
			
			<div style={{ padding: "10px 20px", justifyContent: 'left' }} >
				<div style={{ display: 'flex', justifyContent: 'right' }}>
					<input type="text" placeholder='Search....' onChange={handleFilter} style={{ padding: '6px 10px' }} />
				
				 <div class="bg-danger text-white">
						<CSVLink className="downloadbtn" filename="SavingPlan.csv" data={csvData}>
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
export default SavinPlan; 