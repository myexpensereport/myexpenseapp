import axios from 'axios'

const PAYOUT_BASE_URL = "http://localhost:8888/payout";


export const listPayout = () => {
    return axios.get('http://localhost:8888/payout/getAllPayout')
};

export const createPayout = (payout) => {
    return axios.post('http://localhost:8888/payout/addPayout', payout)
}

export const getPayoutById= (id) => {
    return axios.get(PAYOUT_BASE_URL + '/' + id);
}

export const updatePayout = (id, payout) => {
    return axios.put(PAYOUT_BASE_URL + '/' +id, payout);
}

export const deletePayout = (id) => {
    return axios.delete(PAYOUT_BASE_URL + '/' + id);
}