import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/interns';

const getInterns = () => {
    return axios.get(API_BASE_URL);
};

const registerIntern = (internData) => {
    return axios.post(API_BASE_URL, internData);
};

const internService = {
    getInterns,
    registerIntern,
};

export default internService;