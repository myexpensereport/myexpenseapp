import React, { useState, useEffect } from 'react';
import adminLayout from "../hoc/adminLayout"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const DashboardPage = () => {

	const dailyurl = 'http://localhost:8888/myexpense/getAllExpensesReport/daily';
	const weeklyurl = 'http://localhost:8888/myexpense/getAllExpensesReport/weekly';
	const monthlyurl = 'http://localhost:8888/myexpense/getAllExpensesReport/monthly';
	const annualurl = 'http://localhost:8888/myexpense/getAllExpensesReport/annual';
	const totalExpenseurl = 'http://localhost:8888/myexpense/getAllExpensesReport/total';

	const [daiylyTotalAmount, setDailyTotalAmount] = useState([]);
	const [weeklyTotalAmount, setWeeklyTotalAmount] = useState([]);
	const [monthlyTotalAmount, setMonthlyTotalAmount] = useState([]);
	const [annualTotalAmount, setAnnualTotalAmount] = useState([]);
	const [totalAmount, setTotalAmount] = useState([]);


	useEffect(() => {
		const fetchDailyData = async () => {
			axios.get(dailyurl)
				.then(res => {
					setDailyTotalAmount(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchDailyData();
	}, []);

	function findDailyExpense() {
		let t = 0;
		const res = daiylyTotalAmount.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}

	//Weekly Implement :
	useEffect(() => {
		const fetchWeeklyData = async () => {
			axios.get(weeklyurl)
				.then(res => {
					setWeeklyTotalAmount(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchWeeklyData();
	}, []);

	function findWeeklyExpense() {
		let t = 0;
		const res = weeklyTotalAmount.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}
	//Monthly Implement:
	useEffect(() => {
		const fetchMonthlyData = async () => {
			axios.get(monthlyurl)
				.then(res => {
					setMonthlyTotalAmount(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchMonthlyData();
	}, []);

	function findMonthlyExpense() {
		let t = 0;
		const res = monthlyTotalAmount.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}

	//Annual Implement::
	useEffect(() => {
		const fetchAnnualData = async () => {
			axios.get(annualurl)
				.then(res => {
					setAnnualTotalAmount(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchAnnualData();
	}, []);

	function findAnnualExpense() {
		let t = 0;
		const res = annualTotalAmount.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}

	//Total Expense Implement ::
	useEffect(() => {
		const fetchTotalData = async () => {
			axios.get(totalExpenseurl)
				.then(res => {
					setTotalAmount(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchTotalData();
	}, []);

	function findTotalExpense() {
		let t = 0;
		const res = totalAmount.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}



	return <>
		<div className="row">
			<div className="col-xl-4 col-sm-7 mb-4">
				<div className="card text-white bg-primary o-hidden h-100">
					<div className="card-body">
						<div className="card-body-icon">
							<i className="fa fa-fw fa-comments"></i>
						</div>
						<div className="mr-5">Daily Expense::{findDailyExpense()}</div>
					</div>
					<a className="card-footer text-white bg-secondary small z-1" href="/DailyExpense">
						<span className="float-left">View Details</span>
						<span className="float-right">
							<i className="fa fa-angle-right"></i>
						</span>
					</a>
				</div>
			</div>
			<div className="col-xl-4 col-sm-7 mb-4">
				<div className="card text-white bg-warning o-hidden h-100">
					<div className="card-body">
						<div className="card-body-icon">
							<i className="fa fa-fw fa-list"></i>
						</div>
						<div className="mr-5">Weekly Expense::{findWeeklyExpense()}</div>
					</div>
					<a className="card-footer text-white bg-secondary small z-1" href="/WeekelyExpense">
						<span className="float-left">View Details</span>
						<span className="float-right">
							<i className="fa fa-angle-right"></i>
						</span>
					</a>
				</div>
			</div>
			<div className="col-xl-4 col-sm-7 mb-4">
				<div className="card text-white bg-info o-hidden h-100">
					<div className="card-body">
						<div className="card-body-icon">
							<i className="fa fa-fw fa-shopping-cart"></i>
						</div>
						<div className="mr-5">Monthly Expense::{findMonthlyExpense()}</div>
					</div>
					<a className="card-footer text-white bg-secondary small z-1" href="/MonthlyExpense">
						<span className="float-left">View Details</span>
						<span className="float-right">
							<i className="fa fa-angle-right"></i>
						</span>
					</a>
				</div>
			</div>
			<div className="col-xl-4 col-sm-7 mb-4">
				<div className="card text-white bg-danger o-hidden h-100">
					<div className="card-body">
						<div className="card-body-icon">
							<i className="fa fa-fw fa-support"></i>
						</div>
						<div className="mr-5">Annual Expense::{findAnnualExpense()}</div>
					</div>
					<a className="card-footer text-white bg-secondary small z-1" href="/AnnualExpense">
						<span className="float-left">View Details</span>
						<span className="float-right">
							<i className="fa fa-angle-right"></i>
						</span>
					</a>
				</div>
			</div>


			<div className="col-xl-4 col-sm-7 mb-4">
				<div className="card text-white bg-success o-hidden h-100">
					<div className="card-body">
						<div className="card-body-icon">
							<i className="fa fa-fw fa-support"></i>
						</div>
						<div className="mr-5">Total Expense::{findTotalExpense()}</div>
					</div>
					<a className="card-footer text-white bg-secondary small z-1" href="/TotalExpense">
						<span className="float-left">View Details</span>
						<span className="float-right">
							<i className="fa fa-angle-right"></i>
						</span>
					</a>
				</div>
			</div>
		</div>
	</>
}

export default adminLayout(DashboardPage);