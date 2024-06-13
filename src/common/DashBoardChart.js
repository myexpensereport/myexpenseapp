import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

	


function DashBoardChart() {
	 <h5>Pie Chart</h5>
	 
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
	const data = [
  { value: findDailyExpense(), label: 'D' },
  { value: findWeeklyExpense(), label: 'W' },
  { value: findMonthlyExpense(), label: 'M' },
];

const size = {
  width: 350,
  height: 200,
};

  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
     
    />
    
  );
}
export default DashBoardChart;