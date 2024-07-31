import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

	


function DashBoardChart() {
	 <h5>Pie Chart</h5>
	 
	const emiCategoryUrl = 'http://localhost:8888/myexpense/getAllExpensesByCategory/EMI';
	const mutualfundCategoryUrl = 'http://localhost:8888/myexpense/getAllExpensesByCategory/MutualFund';
	const shoppingCategoryUrl = 'http://localhost:8888/myexpense/getAllExpensesByCategory/Shopping';
	const homeexpenseCategoryUrl = 'http://localhost:8888/myexpense/getAllExpensesByCategory/HomeExepnse';
	const investmentCategoryUrl = 'http://localhost:8888/myexpense/getAllExpensesByCategory/Investment';
	const othersCategoryUrl = 'http://localhost:8888/myexpense/getAllExpensesByCategory/Others';

	const [emiCategory, setEmiCategory] = useState([]);
	const [mutualfundCategory, setMutualfundCategory] = useState([]);
	const [shoppingCategory, setShoppingCategory] = useState([]);
	const [homeexpenseCategory, setHomeexpenseCategory] = useState([]);
	const [investmentCategory, setInvestmentCategory] = useState([]);
	const [othersCategory, setOthersCategory] = useState([]);


	useEffect(() => {
		const fetchEmiCategoryData = async () => {
			axios.get(emiCategoryUrl)
				.then(res => {
					setEmiCategory(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchEmiCategoryData();
	}, []);

	function findEmiCategoryData() {
		let t = 0;
		const res = emiCategory.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}
	//MutualFund
	useEffect(() => {
		const fetchMutualfundCategoryData = async () => {
			axios.get(mutualfundCategoryUrl)
				.then(res => {
					setMutualfundCategory(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchMutualfundCategoryData();
	}, []);

	function findMutualfundCategoryData() {
		let t = 0;
		const res = mutualfundCategory.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}
	
	//Shopping
	useEffect(() => {
		const fetchShoppingCategoryData = async () => {
			axios.get(shoppingCategoryUrl)
				.then(res => {
					setShoppingCategory(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchShoppingCategoryData();
	}, []);

	function findShoppingCategoryData() {
		let t = 0;
		const res = shoppingCategory.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}
	
	//HomeExepnse
	useEffect(() => {
		const fetchHomeexpenseCategoryData = async () => {
			axios.get(homeexpenseCategoryUrl)
				.then(res => {
					setHomeexpenseCategory(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchHomeexpenseCategoryData();
	}, []);

	function findHomeexpenseCategoryData() {
		let t = 0;
		const res = homeexpenseCategory.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}
	
	//Investment
	useEffect(() => {
		const fetchInvestmentCategoryData = async () => {
			axios.get(investmentCategoryUrl)
				.then(res => {
					setInvestmentCategory(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchInvestmentCategoryData();
	}, []);

	function findInvestmentCategoryData() {
		let t = 0;
		const res = investmentCategory.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}
	
	//Others
	useEffect(() => {
		const fetchOthersCategoryData = async () => {
			axios.get(othersCategoryUrl)
				.then(res => {
					setOthersCategory(res.data)
				})
				.catch(err => console.log(err));
		}
		fetchOthersCategoryData();
	}, []);

	function findOthersCategoryData() {
		let t = 0;
		const res = othersCategory.map(({ amount }) => t = t + amount);
		console.log("res::::" + res);
		return t;
	}

	
	
	const data = [
   { value: findEmiCategoryData(), label: 'E' },
   { value: findMutualfundCategoryData(), label: 'MF' },
   { value: findShoppingCategoryData(), label: 'S' },
    { value: findHomeexpenseCategoryData(), label: 'H' },
   { value: findInvestmentCategoryData(), label: 'I' },
   { value: findOthersCategoryData(), label: 'O' },
   
  
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