import React, {useState, useEffect} from 'react'
import {listPayout,deletePayout} from '../authservice/PayoutService';
import { useNavigate,Link } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import HomeIcon from '../common/HomeIcon';

const PayoutList = () => {

    const [payout, setPayout] = useState([])

    useEffect(() => {
        getAllPayout();
    }, [])
    
    const navigate = useNavigate()

    const getAllPayout = () => {
        listPayout().then((response) => {
            setPayout(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log("getAllPayout:::"+error);
        })
    }

const removePayout = (payoutId) => {
	console.log("removePayout:::::"+payoutId);
       deletePayout(payoutId).then((response) =>{
		   console.log(response.data);
        getAllPayout();

       }).catch(error =>{
           console.log("Delete Error:::"+error);
       })
        
    }

    function addNewPayout() {
        navigate('/PayoutComponent')
    }

    const updatePayout = (id) => {
        navigate(`/PayoutComponent/${id}`)
    }
    
    const column = [
		{
			name: "SchemeID",
			selector: row => row.id,
			sortable: true,
		},
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
			name: "Reedem",
			selector: row => row.redeem,
			sortable: true
		},
		{
			name: "Bonus",
			selector: row => row.bonus,
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
		},
		{
			name : "UpdateAction",
            cell: row => <button className="btn btn-info" onClick={() => updatePayout(row.id)} style = {{marginLeft:"1px"}}>Update</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
		},
		{
			name : "DeleteAction",
            cell: row =>  <button className = "btn btn-danger" onClick = {() => removePayout(row.id)}
                                    style = {{marginLeft:"1px"}}> Delete</button>,
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
				maxWidth: 300,
				minWidth: 50,
				width: 120
			},
		},
	}
	
	return (
		<div>
		<div><Link tag="a" className="" to="/dashboardpage"><HomeIcon />
				<i className="fa fa-dashboard"></i> Home
			</Link></div>
			<div>
				<div>
					<center><h1>Add Payout List</h1></center>
				</div>
			</div>
			<div>
			<button className = "btn btn-primary mb-2" onClick={addNewPayout }>Add Payout</button>
			</div>
			<div style={{ padding: "10px 20px", justifyContent: 'left' }} >
				<DataTable
					columns={column}
					customStyles={customStyles}
					data={payout}
					pagination
					selectableRows>
				</DataTable>
			</div>
		</div >
	);

   
}

export default PayoutList