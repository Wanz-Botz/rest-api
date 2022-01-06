const { cekKey, isLimit, limitAdd } = require("../database/db");
const { tiktok } = require("../lib/sosmed");

async function tIk(req, res) {
    const url = req.query.url
    const apikey = req.query.apikey;
    if (!url || !apikey) return res.status(404).send({
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
    tiktok(url).then(result => {
        limitAdd(apikey);
        res.status(200).send(result);
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

module.exports = { tIk }