import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './register/Register.js';
import ForgotPassword from './forgotpassword/ForgotPassword.js';
import ResetPassword from './resetpassword/ResetPassword.js';
import DashboardPage from './pages/DashboardPage';
import './assets/css/app.css';
import TypographyPage from './pages/TypographyPage'
import LoginPage from './pages/auth/LoginPage'
import AdminBlankPage from './pages/AdminBlankPage';
import SavingPlan from './saving/SavingPlan';
import AddSavingPlan from './saving/AddSavingPlan';
import TransanctionHistory from './transanctionhistory/TransanctionHistory';
import DailyExpense from './transanctionhistory/DailyExpense';
import WeekelyExpense from './transanctionhistory/WeekelyExpense';
import MonthlyExpense from './transanctionhistory/MonthlyExpense';
import AnnualExpense from './transanctionhistory/AnnualExpense';
import TotalExpense from './transanctionhistory/TotalExpense';
import Payout from './payout/Payout';
import PayoutAddAndUpdate from './payout/PayoutAddAndUpdate';
import PayoutComponent from './payout/PayoutComponent';

import DashBoardChart from './common/DashBoardChart';
import AddExpenses from './addexpenses/AddExpenses';


import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";



function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={<LoginPage />}
					/>
					<Route
						exact
						path="/Register"
						element={<Register />}
					/>
					<Route
						exact
						path="/loginsucess"
						element={<loginsucess />}
					/>
					<Route
						exact
						path="/ForgotPassword"
						element={<ForgotPassword />}
					/>
					<Route
						exact
						path="/ResetPassword"
						element={<ResetPassword />}
					/>
				<Route exact path='/DashboardPage' element={<DashboardPage/>} />
				<Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/typography' element={<TypographyPage/>} />
                <Route exact path='/blank-page' element={<AdminBlankPage/>} />
                <Route exact path='/DashBoardChart' element={<DashBoardChart/>} />
                <Route exact path='/SavingPlan' element={<SavingPlan/>} />
                <Route exact path='/AddExpenses' element={<AddExpenses/>} />
                <Route exact path='/AddSavingPlan' element={<AddSavingPlan/>} />
                <Route exact path='/TransanctionHistory' element={<TransanctionHistory/>} />
                <Route exact path='/DailyExpense' element={<DailyExpense/>} />
                <Route exact path='/WeekelyExpense' element={<WeekelyExpense/>} />
                <Route exact path='/MonthlyExpense' element={<MonthlyExpense/>} />
                <Route exact path='/AnnualExpense' element={<AnnualExpense/>} />
                <Route exact path='/TotalExpense' element={<TotalExpense/>} />
                <Route exact path='/Payout' element={<Payout/>} />
                <Route exact path='/PayoutAddAndUpdate' element={<PayoutAddAndUpdate/>} />
                <Route exact path='/PayoutComponent' element={<PayoutComponent/>} />
                <Route exact path='/PayoutComponent/:id' element={<PayoutComponent/>} />
                
				</Routes>
			</Router>
		</>
	);
}

export default App;


