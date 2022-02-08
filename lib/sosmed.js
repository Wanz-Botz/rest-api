const TikTokScraper = require('tiktok-scraper');

const needle = require('needle');

const fbdl = require('fbdl-core');

const axios = require('axios');

async function TiktokData(url) {

	const videoMeta = await TikTokScraper.getVideoMeta(url);

    return ({

		status: true,

		code: 200,

		creator: "@Wanz-Botz",

		judul: videoMeta.collector[0].text,

		video_URL: {

			vid_wm: videoMeta.collector[0].videoUrl,

			vid_nowm: videoMeta.collector[0].videoUrlNoWaterMark

		}

	});

}

const tiktok = (url) => new Promise((resolve, reject) => {

    if (url === 'undefined') { reject('masukan text nya kak.') }

    try {

		TiktokData(url).then(data => {

			resolve(data);

		});

    } catch (error) {

        reject({

			code:400,

			message: error

		});

    }

});
module.exports = { tiktok }
