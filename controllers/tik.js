const { cekKey, isLimit, limitAdd } = require("../database/db");
const { tiktok } = require("../lib/sosmed");

async function tIk(req, res) {
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
    tiktok(url).then(data => {
        res.status(200).send({
            status: 200, 
            nowm: data.nowm,
            mp3: data.mp4,
            original: data.original
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}

module.exports = { tIk }
