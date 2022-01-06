router.get('/tiktod/stalk', async (req, res, next) => {
if (!req.query.apikey) return res.send({ status: 400, message: 'Masukkan Parameter apikey' })
cek = await cekApiKey(req.query.apikey)
if (!cek) return res.status(404).send({ status: 404, message: 'APIKEY INVALID!!!' })
    var username = req.query.username
    if (!username) return res.json(loghandler.notusername)



    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})
