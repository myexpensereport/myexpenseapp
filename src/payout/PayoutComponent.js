import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { updatePayout, createPayout, getPayoutById} from '../authservice/PayoutService';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const PayoutComponent = () => {

    const [schemeName, setSchemeName] = useState('')
    const [investAmount, setInvestAmount] = useState('')
    const [expectedAmount, setExpectedAmount] = useState(0)
    const [startDate, setStartDate] = useState(dayjs('06-10-2024'))
    const [endDate, setEndDate] = useState(dayjs('06-10-2024'))
    const [tenure, setTenure] = useState('')
    const [returnEarnedDate, setReturnEarnedDate] = useState(dayjs('06-10-2024'))
    const [interstAmount, setInterstAmount] = useState('')
    const [redeem, setRedeem] = useState('')
    const [bonus, setBonus] = useState('')
    const [balanceFund, setBalanceFund] = useState('')
    const [totalEarned, setTotalEarned] = useState('')
    const [status, setStatus] = useState('')
    


    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdatePayout = (e) => {
        e.preventDefault();

        const payload = {schemeName,investAmount,expectedAmount,startDate,endDate,tenure,returnEarnedDate,interstAmount,
        				redeem,bonus, balanceFund,totalEarned, status}

        console.log(payload);
        if(id){
            updatePayout(id, payload).then((response) => {
				console.log(response.data)
                navigate('/PayoutList')
            }).catch(error => {
                console.log(error)
            })

        }else{
			 console.log("Payload:::"+payload);
            createPayout(payload).then((response) =>{
                console.log("createPayout:::"+response.data)
                navigate('/PayoutList');
    
            }).catch(error => {
                console.log("createPayout Error::::"+error)
            })
        }
        
    }
    
    function getStartDate(startDate) {
            console.log("getStartDate#####"+startDate);
            let nextDate = dayjs(startDate);
            nextDate = nextDate.setDate(nextDate);
            setStartDate(nextDate);

        }
    function getEndDate(endDate) {
            console.log("getEndDate:::");
            let nextDate = dayjs(endDate);
            nextDate = nextDate.setDate(nextDate);
            setStartDate(nextDate);

        }
        
      function getReturnEarnDate(endDate) {
            console.log("getReturnEarnDate:::");
            let nextDate = new Date(endDate);
            nextDate = nextDate.setDate(nextDate);
            setStartDate(nextDate);

        }
        
    
    useEffect(() => {
        if(id){
            getPayoutById(id).then((response) =>{
                setSchemeName(response.data.schemeName)
                setInvestAmount(response.data.investAmount)
                setExpectedAmount(response.data.expectedAmount)
                setStartDate(getStartDate(response.data.startDate))
                setEndDate(getEndDate(response.data.endDate))
                setTenure(response.data.tenure)
                setReturnEarnedDate(getReturnEarnDate(response.data.returnEarnedDate))
                setInterstAmount(response.data.interstAmount)
                setRedeem(response.data.redeem)
                setBonus(response.data.bonus)
                setBalanceFund(response.data.balanceFund)
                setTotalEarned(response.data.totalEarned)
                setStatus(response.data.status)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [id])

    const pageTitle = () => {

        if(id){
            return <h2 className = "text-center">Update Payout</h2>
        }else{
            return <h2 className = "text-center">Add Payout</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           pageTitle()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Scheme Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Scheme name"
                                        name = "schemeName"
                                        className = "form-control"
                                        value = {schemeName}
                                        onChange = {(e) => setSchemeName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Invest Amount :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Invest name"
                                        name = "investAmount"
                                        className = "form-control"
                                        value = {investAmount}
                                        onChange = {(e) => setInvestAmount(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Expected Amount :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Expected Amount"
                                        name = "expectedAmount"
                                        className = "form-control"
                                        value = {expectedAmount}
                                        onChange = {(e) => setExpectedAmount(e.target.value)}
                                    >
                                    </input>
                                </div>
                                 <LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={['DatePicker', 'DatePicker']}>
											<DatePicker
												label="Start Date"
												value={startDate}
												onChange={(newValue) => setStartDate(newValue)}
											/>
										</DemoContainer>
									</LocalizationProvider>

									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={['DatePicker', 'DatePicker']}>
											<DatePicker
												label="End date"
												value={endDate}
												onChange={(newValue) => setEndDate(newValue)}
											/>
										</DemoContainer>
									</LocalizationProvider>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Tenure :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Tenure"
                                        name = "tenure"
                                        className = "form-control"
                                        value = {tenure}
                                        onChange = {(e) => setTenure(e.target.value)}
                                    >
                                    </input>
                                </div>
                                 
                                 <LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={['DatePicker', 'DatePicker']}>
											<DatePicker
												label="ReturnEarned Date"
												value={returnEarnedDate}
												onChange={(newValue) => setReturnEarnedDate(newValue)}
											/>
										</DemoContainer>
									</LocalizationProvider>
                                 

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Interst Amount :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Interst Amount"
                                        name = "interstAmount"
                                        className = "form-control"
                                        value = {interstAmount}
                                        onChange = {(e) => setInterstAmount(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Redeem  Amount:</label>
                                    <input
                                        type = "test"
                                        placeholder = "Enter Redeem Amount"
                                        name = "redeem"
                                        className = "form-control"
                                        value = {redeem}
                                        onChange = {(e) => setRedeem(e.target.value)}
                                    >
                                    </input>
                                </div>
                                 <div className = "form-group mb-2">
                                    <label className = "form-label"> Bonus Amount  :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Bonus Amount"
                                        name = "bonus"
                                        className = "form-control"
                                        value = {bonus}
                                        onChange = {(e) => setBonus(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Balance Fund :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Balance"
                                        name = "balanceFund"
                                        className = "form-control"
                                        value = {balanceFund}
                                        onChange = {(e) => setBalanceFund(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Total Earned Amount :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Total Earned Emount"
                                        name = "totalEarned"
                                        className = "form-control"
                                        value = {totalEarned}
                                        onChange = {(e) => setTotalEarned(e.target.value)}
                                    >
                                    </input>
                                </div>
                                 <div className = "form-group mb-2">
                                    <label className = "form-label"> Status :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Status"
                                        name = "status"
                                        className = "form-control"
                                        value = {status}
                                        onChange = {(e) => setStatus(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdatePayout(e)} >Submit </button>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default PayoutComponent