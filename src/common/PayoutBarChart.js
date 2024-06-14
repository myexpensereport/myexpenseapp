import { BarChart } from '@mui/x-charts/BarChart';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { axisClasses } from '@mui/x-charts/ChartsAxis';


export default function PayoutBarChart() {
	
	const janPayouturl = 'http://localhost:8888/payout/getAllPayout/Jan'
	const febPayouturl = 'http://localhost:8888/payout/getAllPayout/Feb'
	const marPayouturl = 'http://localhost:8888/payout/getAllPayout/Mar'
	const aprPayouturl = 'http://localhost:8888/payout/getAllPayout/Apr'
	const mayPayouturl = 'http://localhost:8888/payout/getAllPayout/May'
	const junePayouturl = 'http://localhost:8888/payout/getAllPayout/June'
	const julyPayouturl = 'http://localhost:8888/payout/getAllPayout/July'
	const augPayouturl = 'http://localhost:8888/payout/getAllPayout/Aug'
	const septPayouturl = 'http://localhost:8888/payout/getAllPayout/Sept'
	const octPayouturl = 'http://localhost:8888/payout/getAllPayout/Oct'
	const novPayouturl = 'http://localhost:8888/payout/getAllPayout/Nov'
	const decPayouturl = 'http://localhost:8888/payout/getAllPayout/Dec'
	
	const [totalJanEarnedPayout, setTotalJanEarnedPayout] = useState([]);
	const [totalFebEarnedPayout, setTotalFebEarnedPayout] = useState([]);
	const [totalMarchEarnedPayout, setTotalMarchEarnedPayout] = useState([]);
	const [totalAprilEarnedPayout, setTotalAprilEarnedPayout] = useState([]);
	const [totalMayEarnedPayout, setTotalMayEarnedPayout] = useState([]);
	const [totalJuneEarnedPayout, setTotalJuneEarnedPayout] = useState([]);
	const [totalJulyEarnedPayout, setTotalJulyEarnedPayout] = useState([]);
	const [totaAugEarnedPayout, setTotaAugEarnedPayout] = useState([]);
	const [totalSeptEarnedPayout, setTotalSeptEarnedPayout] = useState([]);
	const [totalOctEarnedPayout, setTotalOctEarnedPayout] = useState([]);
	const [totalNovEarnedPayout, setTotalNovEarnedPayout] = useState([]);
	const [totalDecEarnedPayout, setTotalDecEarnedPayout] = useState([]);
	
	//Jan Month Payout Implement :
	useEffect(() => {
		const fetchJanMonthData = async () => {
			axios.get(janPayouturl)
				.then(res => {
					console.log(res.data)
					setTotalJanEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchJanMonthData();
	}, []);
	
	//Feb Month Payout Implement :
	useEffect(() => {
		const fetchFebMonthData = async () => {
			axios.get(febPayouturl)
				.then(res => {
					console.log(res.data)
					setTotalFebEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchFebMonthData();
	}, []);
	
	//March Month Payout Implement :
	useEffect(() => {
		const fetchMarchMonthData = async () => {
			axios.get(marPayouturl)
				.then(res => {
					console.log(res.data)
					setTotalMarchEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchMarchMonthData();
	}, []);
	
	//April Month Payout Implement :
	useEffect(() => {
		const fetchAprilMonthData = async () => {
			axios.get(aprPayouturl)
				.then(res => {
					console.log(res.data)
					setTotalAprilEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchAprilMonthData();
	}, []);
	
	//May Month Payout Implement :
	useEffect(() => {
		const fetchMayMonthData = async () => {
			axios.get(mayPayouturl)
				.then(res => {
					console.log(res.data)
					setTotalMayEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchMayMonthData();
	}, []);
	
	//June Month Payout Implement :
	useEffect(() => {
		const fetchJuneMonthData = async () => {
			axios.get(junePayouturl)
				.then(res => {
					console.log(res.data)
					setTotalJuneEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchJuneMonthData();
	}, []);
	
	//July Month Payout Implement :
	useEffect(() => {
		const fetchJulyMonthData = async () => {
			axios.get(julyPayouturl)
				.then(res => {
					console.log(res.data)
					setTotalJulyEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchJulyMonthData();
	}, []);
	
	//Aug Month Payout Implement :
	useEffect(() => {
		const fetchAugMonthData = async () => {
			axios.get(augPayouturl)
				.then(res => {
					console.log(res.data)
					setTotaAugEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchAugMonthData();
	}, []);
	
	//Sept Month Payout Implement :
	useEffect(() => {
		const fetchSeptMonthData = async () => {
			axios.get(septPayouturl)
				.then(res => {
					console.log(res.data)
					setTotalSeptEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchSeptMonthData();
	}, []);
	
	//Oct Month Payout Implement :
	useEffect(() => {
		const fetchOctMonthData = async () => {
			axios.get(octPayouturl)
				.then(res => {
					console.log(res.data)
					setTotalOctEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchOctMonthData();
	}, []);
	
	//Nov Month Payout Implement :
	useEffect(() => {
		const fetchNovMonthData = async () => {
			axios.get(novPayouturl)
				.then(res => {
					console.log(res.data)
					setTotalNovEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchNovMonthData();
	}, []);
	
	//Dec Month Payout Implement :
	useEffect(() => {
		const fetchDecMonthData = async () => {
			axios.get(decPayouturl)
				.then(res => {
					console.log(res.data)
					setTotalDecEarnedPayout(res.data);
				})
				.catch(err => console.log(err));
		}
		fetchDecMonthData();
	}, []);


const dataset = [
  {
    earnedPayout: totalJanEarnedPayout,
    month: 'Jan',
  },
  {
    earnedPayout: totalFebEarnedPayout,
    month: 'Feb',
  },
  {
    earnedPayout: totalMarchEarnedPayout,
    month: 'Mar',
  },
  {
    
    earnedPayout: totalAprilEarnedPayout,
    month: 'Apr',
  },
  {
    
    earnedPayout: totalMayEarnedPayout,
    month: 'May',
  },
  {
    
    earnedPayout: totalJuneEarnedPayout,
    month: 'June',
  },
  {
   
    earnedPayout: totalJulyEarnedPayout,
    month: 'July',
  },
  {
   
    earnedPayout: totaAugEarnedPayout,
    month: 'Aug',
  },
  {
   
    earnedPayout: totalSeptEarnedPayout,
    month: 'Sept',
  },
  {
    
    earnedPayout: totalOctEarnedPayout,
    month: 'Oct',
  },
  {
   
    earnedPayout: totalNovEarnedPayout,
    month: 'Nov',
  },
  {
   
    earnedPayout: totalDecEarnedPayout,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}`;


const chartSetting = {
  series: [{ dataKey: 'earnedPayout', label: 'Total Returned', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};


  return (
    <div style={{ width: '100%' }}>
      
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month'},
        ]}
        {...chartSetting}
      />
    </div>
  );
}
