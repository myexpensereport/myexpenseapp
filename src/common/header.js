import * as React from "react";
import '../assets/css/header.css';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
function Header() {
    return (
		<div class="header">
  <a href="#default" class="logo">Welcome To Expense Dashboard</a>
  <div class="header-right">
    <a class="active" href="/">Login</a>
  </div>
</div>
         )
}
export default Header;