'use strict'

const axios = require('axios');

const BASE_URL = `https://jsonbase.com`;
const JSONBASE_PATH = process.env.JB_PATH;

let config = {
    baseURL: BASE_URL,
    url: JSONBASE_PATH,
    method: 'put',
    headers: {
        'Content-Type': 'application/json',
    },
    data: ''
};

module.exports = async (postdata) => {
    const res = await axios.get(`${BASE_URL}/${JSONBASE_PATH}`);
    const db = res.data;
    console.log(db, typeof(db))
    db.push(postdata);
    config.data = db;
    // config.data = qs.stringify({
    //     message: JSON.stringify(postdata),
    // });
    return axios.request(config);
}