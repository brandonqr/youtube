// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var search = require("youtube-search");
const ytdl = require("ytdl-core");

export default function handler(req, res) {
	const { q = "" } = req.query;
	if (q === "") {
		return [];
	}

	var opts = {
		maxResults: 20,
		type: "youtube#video",
		key: process.env.YOUTUBE_KEY,
	};

	search(q, opts, async (err, results) => {
		if (err) return console.log(err);
		const datos = await Promise.all(
			results.map(async (result) => {
				const { link } = result;
				const v_id = link.split("v=")[1];
				let info = await ytdl.getInfo(link);
				return {
					url: "https://www.youtube.com/embed/" + v_id,
					info: info.formats.sort((a, b) => {
						return a.mimeType < b.mimeType;
					}),
					...result,
				};
			})
		);
  res.status(200).json(datos);
	});


}
