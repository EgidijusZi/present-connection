import axios from 'axios'

export const baseUrl = 'https://localhost:7098'

export const createAPIEndpoint = endpoint => {

    let url = baseUrl + '/api/' + endpoint + '/';
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecordForm => axios.post(url, newRecordForm)
    }
}