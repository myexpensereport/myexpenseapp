import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../authservice/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { CSVLink } from "react-csv";

const TransanctionHistory= () => {

const url = 'http://localhost:8888/myexpense/getAllExpense'
const [records, setRecords] = useState([]);
const [filterRecords, setFilterRecords] = useState([]);
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
      justifyContent: 'center',
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
  
        return (
			
            <div style={{ padding:"10px 20px", justifyContent : 'left'}} >
            <div style={{display:'flex', justifyContent : 'right'}}>
            <input type = "text" placeholder='Search....' onChange = {handleFilter} style={{padding:'6px 10px'}}/>
            <div class="bg-danger text-white">
						<CSVLink className="downloadbtn" filename="trsanctionhistory.csv" data={csvData}>
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
          );
}
export default TransanctionHistory;