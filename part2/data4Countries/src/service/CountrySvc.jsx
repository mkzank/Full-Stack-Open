import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = () => axios.get(`${baseUrl}/api/all`).then(resp => resp.data)


export default {getAll}