import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers : {
        Authorization: 'Client-ID AcvSdcju8En7saMqwhTAY_Ew5rz5yNnV8C1_qxRt3T4'
    }
})