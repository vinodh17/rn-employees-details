import axios from 'axios';

const URL = 'https://hn.algolia.com/api/v1/';

const http = axios.create({baseURL: URL});

export default http;
