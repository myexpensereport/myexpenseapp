import * as React from "react";
import '../assets/css/header.css';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {useNavigate,Link} from "react-router-dom";
import {SfNav} from "react-sf-building-blocks";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import HomeIcon from '../common/HomeIcon';
import Logo from '../assets/images/logo1_test.png';

function Header() {
	const getUserName = () => {
		const name = localStorage.getItem("token-info");
		const initialValue = JSON.parse(name);
		return "Hello "+initialValue.name;

	};
 const navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem("token-info");
		 navigate('/');
	};
	return (

		<Navbar className="bg-body-tertiary">
		<Link tag="a" className="" to="/dashboardpage">
			  <img src={Logo} alt='logo' />
              <h1>MyDashboard</h1> </Link> 
			<Container>
				<Navbar.Collapse className="justify-content-end">
				<NavDropdown title = {getUserName()}>
				<NavDropdown.Item onClickCapture={logout}>Logout User
                        </NavDropdown.Item>
				</NavDropdown>				
				</Navbar.Collapse>
			</Container>
		</Navbar>

	)
}
export default Header;