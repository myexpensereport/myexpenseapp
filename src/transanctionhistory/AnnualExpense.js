import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { CSVLink } from "react-csv";
import Header from './../common/header';

const AnnualExpense= () => {

const url = 'http://localhost:8888/myexpense/getAllExpensesReport/annual'
const [records, setRecords] = useState([]);
const [filterRecords, setFilterRecords] = useState([]);
const [totalAmount, setTotalAmount] = useState([]);
const [csvData, setCsvData] = useState([]);

const column = [
	{
		
		name : "Expense Name",
		selector :row =>row.expenseName,
		sortable :true,
		
		
	},
	{
		name : "Category",
		selector :row =>row.category,
		sortable :true
	},
	{
		name : "Amount",
		selector :row =>row.amount,
		sortable :true
	},
	{
		name : "Created",
		selector :row =>row.created,
		sortable :true
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
	const fetchData =async () => {
	axios.get(url)
   	   .then(res => {setRecords(res.data)
   	   setFilterRecords(res.data)
   	   setTotalAmount(res.data)
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
  
  function findSumUsingMap(){
  let t = 0;
  const res= totalAmount.map(({amount}) => t = t + amount);
  console.log("res::::"+res);
  return t;
  }
 
        return ( 
			<div>
			 <Header />
			<div class="p-4 mb-2 bg-success text-white"><b><center> Total Expense : {findSumUsingMap()}</center></b></div>
            <div style={{padding:"10px 20px", justifyContent : 'left'}} >
            <div style={{display:'flex', justifyContent : 'right'}}>
            <input type = "text" placeholder='Search....' onChange = {handleFilter} style={{padding:'6px 10px'}}/> 
            <div class="bg-danger text-white">
						<CSVLink className="downloadbtn" filename="annualexpense.csv" data={csvData}>
							Export to CSV
						</CSVLink>
					</div>
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
export default AnnualExpense;