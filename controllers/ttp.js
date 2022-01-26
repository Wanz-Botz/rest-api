const { cekKey, limitAdd, isLimit } = require('../database/db');
const fetch = require('node-fetch')
const base64 = require('base-64')


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
        data = await fetch(`https://hardianto.xyz/api/maker/ttp?text=${encodeURIComponent(text)}&apikey=hardianto`).then(v => v.json())
         base64 = data.base64
         var buffer = base64.slice(22)
         await fs.writeFileSync(`ttp.png`, buffer, 'base64')
        res.sendFile(__path+'/ttp.png')
    } catch {
        res.status(500).send({ status: false, message: 'Internal Server Error' })
    }
}


module.exports = { ttp }
