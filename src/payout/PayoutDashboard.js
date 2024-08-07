import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import PayoutBarChart from '../common/PayoutBarChart';
import Header from './../common/header';
import { Link } from 'react-router-dom';

import { CSVLink } from "react-csv";

const PayoutDashboard = () => {

	const url = 'http://localhost:8888/payout/getAllPayout'
	const [records, setRecords] = useState([]);
	const [filterRecords, setFilterRecords] = useState([]);

	const [totalInvestAmount, setTotalInvestAmount] = useState([]);
	const [totalReturnAmount, setTotalReturnAmount] = useState([]);
	const [totalRedeemAmount, setTotalRedeemAmount] = useState([]);
	const [totalBalanceInvestAmount, setTotalBalanceInvestAmount] = useState([]);

	const [csvData, setCsvData] = useState([]);

	const column = [
		{
			name: "SchemeName",
			accessor: "row.schemeName",
			selector: row => <Link to={'/PayoutView/' + row.id} class="text-decoration-underline text-primary">{row.schemeName}</Link>
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
			name: "Interst Amount",
			selector: row => row.interstAmount,
			sortable: true
		},
		{
			name: "Total Return",
			selector: row => (row.interstAmount + row.bonus),
			sortable: true
		},

		{
			name: "Tenure",
			selector: row => row.tenure,
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
			name: "Return Earn Date",
			selector: row => row.returnEarnedDate,
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
				backgroundColor: '#f2f2f2',
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
					console.log("reponse data is ::", res.data)
					setRecords(res.data)
					setFilterRecords(res.data)
					setTotalInvestAmount(res.data)
					setTotalReturnAmount(res.data)
					setTotalRedeemAmount(res.data)
					setTotalBalanceInvestAmount(res.data)
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
		console.log("totalInvestAmount::::" + res);
		return t;
	}
	function getReturnedAmount() {
		let t = 0;
		const res = totalReturnAmount.map(({ interstAmount }) => t = t + interstAmount);
		console.log("res::::" + res);
		const finalRes = totalReturnAmount.map(({ bonus }) => t = t + bonus);
		console.log("getReturnedAmount::::" + finalRes);
		return t;
	}
	function getTotalReedemAmount() {
		let t = 0;
		const res = totalRedeemAmount.map(({ redeem }) => t = t + redeem);
		console.log("redeem::::" + res);
		return t;
	}
	function getTotalBalanceInvestAmount() {
		let t = 0;
		const res = totalBalanceInvestAmount.map(({ balanceFund }) => t = t + balanceFund);
		console.log("balanceFund::::" + res);
		return t;
	}


	return (
		<div>
			<div><Header />
				<h5><center>Payout Dashboard</center> </h5>
			</div>
			<div class="bg-success text-white"><b><center> Total InvestedAmount = {getTotalInvestAmount()} | Total RedeemedAmount = {getTotalReedemAmount()} | Total Balance InvestedAmount = {getTotalBalanceInvestAmount()}|| Total ReturnedAmount = {getReturnedAmount()}</center></b></div>
			<div>
				<PayoutBarChart />
			</div>
			<div>

			</div>

			<div style={{ padding: "10px 20px", justifyContent: 'left' }} >
				<div style={{ display: 'flex', justifyContent: 'right' }}>
					<input type="text" placeholder='Search....' onChange={handleFilter} style={{ padding: '6px 10px' }} />
					{/* Export Button Start */}
					<div class="bg-danger text-white">
						<CSVLink className="downloadbtn" filename="Payout.csv" data={csvData}>
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
export default PayoutDashboard;