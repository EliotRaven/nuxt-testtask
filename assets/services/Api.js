import axios from 'axios'

class API {
    call(method, url, headers, params=null, data=null){
        return axios({
            method,
            baseURL: 'https://api.quwi.com/v2/',
            url,
            headers,
            params,
            data
        })
    }
}

export default new API()