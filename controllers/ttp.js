const { cekKey, limitAdd, isLimit } = require('../database/db');
const fetch = require('node-fetch')


async function ttp(req, res) {
    const { text, apikey } = req.query
    if (!text) return res.status(200).send({
        status: false,
        message: `masukan parameter 'text'`
    })
    let message = await cekKey(apikey, res)
    if (message) return res.status(200).send({
        status: false,
        message
    })
    try {
        limitAdd(apikey)
        buffer = await fetch(`https://hardianto.xyz/api/maker/ttp?text=${encodeURIComponent(text)}&apikey=hardianto`).then(v => v.buffer())
        res.type('image')
        res.send(buffer)
    } catch {
        res.status(500).send({ status: false, message: 'Internal Server Error' })
    }
}


module.exports = { ttp }
