import * as React from "react";
import '../assets/css/header.css';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
	const getUserName = () => {
		const name = localStorage.getItem("token-info");
		const initialValue = JSON.parse(name);
		return initialValue.name;

	};
 const navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem("token-info");
		 navigate('/');
	};
	return (

		<Navbar className="bg-body-tertiary">

			<Container>
				<Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						Signed in as: <a class="active" href="/">{getUserName()}</a>
					</Navbar.Text>
					<button onClickCapture={logout}>
                            logout user
                        </button>
				</Navbar.Collapse>
			</Container>
		</Navbar>


	)
}
export default Header;