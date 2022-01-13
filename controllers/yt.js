const { cekKey, limitAdd, isLimit } = require('../database/db');
const fetch = require('node-fetch')

async function youtubePlay(req, res) {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    fetch(encodeURI(`https://api.zeks.me/api/ytplaymp3?apikey=apivinz&q=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	limitAdd(apikey);
             	author: 'Wanz-Botz',
                 result
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}

async function youtubeMp3(req, res) {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (url === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    fetch(encodeURI(`https://api.zeks.me/api/ytmp3/2?apikey=apivinz&url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	limitAdd(apikey);
             	author: 'Wanz-Botz',
                 result
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}

async function youtubeMp4(req, res) {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (url === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    fetch(encodeURI(`https://api.zeks.me/api/ytmp4/2?apikey=apivinz&url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	limitAdd(apikey);
             	author: 'Wanz-Botz',
                 result
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}

module.exports = { youtubePlay, youtubeMp3, youtubeMp4 };
