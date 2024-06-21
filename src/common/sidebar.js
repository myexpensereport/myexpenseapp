import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';
import HomeIcon from '../common/HomeIcon';
import Logo from '../assets/images/logo1_test.png';

class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
        <Link tag="a" className="" to="/dashboardpage">
			  <img src={Logo} alt='logo' />
              <h1>MyDashboard</h1> </Link> 
                <ul className="list-unstyled">
                <li className="mb-2">
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/addexpenses">
                            <i className="fa fa-file-o"></i>Add Expenses
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/addsavingplan">
                            <i className="fa fa-file-o"></i>Add Saving Plan
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/savingplan">
                            <i className="fa fa-file-o"></i>Saving Details
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/PayoutHome" >
                            <i className="fa fa-file-o"></i>Payout Add/Update
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/PayoutDashboard">
                            <i className="fa fa-file-o"></i>Payout Details
                        </Link>
                    </li>
                    
                   
                </ul>
             
              
            
        </div>
    }
}

export default Sidebar;