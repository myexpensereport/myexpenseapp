import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/dashboardpage">
                            <i className="fa fa-dashboard"></i>Expense Dashboard
                        </Link>
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
             
            </PerfectScrollbar>
              
            
        </div>
    }
}

export default Sidebar;