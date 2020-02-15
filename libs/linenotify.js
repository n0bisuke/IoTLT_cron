'use strict'

const axios = require('axios');
const qs = require('querystring');

const BASE_URL = 'https://notify-api.line.me';
const PATH =  '/api/notify';
const LINE_TOKEN = process.env.LINE_TOKEN;

let config = {
    baseURL: BASE_URL,
    url: PATH,
    method: 'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${LINE_TOKEN}`
    },
    data: ''
};

module.exports = async (postdata) => {
    config.data = qs.stringify({
        message: JSON.stringify(postdata),
    });

    return axios.request(config);
}