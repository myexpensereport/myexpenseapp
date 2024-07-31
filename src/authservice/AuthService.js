import axios from 'axios';

const API_BASE_URL = "http://localhost:8888/myexpense";

class AuthService {
    register(user) {
        return axios.post(`${API_BASE_URL}/register`, user);
    }

    login(user) {
        return axios.post(`${API_BASE_URL}/login`, user);
    }
    forgotPassword(user) {
        return axios.post(`${API_BASE_URL}/forgotPassword`, user);
    }
    
    validateOtp(user) {
        return axios.post(`${API_BASE_URL}/validateOtp`, user);
    }
    resetPassword(user) {
        return axios.post(`${API_BASE_URL}/updatePassword`, user);
    }
     addExpense(expense) {
        return axios.post(`${API_BASE_URL}/addExpense`, expense);
    }
    addSavingPlan(savingplan) {
		console.log(savingplan);
        return axios.post(`${API_BASE_URL}/addSavingPlan`, savingplan);
    }
    updateSavingPlan(id,savingplan) {
		console.log(savingplan);
        return axios.post(`${API_BASE_URL}/id`, savingplan);
    }
}

export default new AuthService();