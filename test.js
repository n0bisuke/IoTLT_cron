const axios = require('axios');
const BASE_URL = `https://jsonbase.com`;
const JSONBASE_PATH = process.env.JB_PATH;

const main = async () => {
    const res = await axios.get(`${BASE_URL}/${JSONBASE_PATH}`);
    const db = res.data;
    //日付ソート
    db.sort((a,b) => (a.lastupdate < b.lastupdate ? 1 : -1));
    console.log(db)
}
main();
