import axios from 'axios'

const service = axios.create({
    timeout: 6000, 
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;',
    }
})

export default service
