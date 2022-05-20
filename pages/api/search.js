// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var search = require("youtube-search");
const ytdl = require("ytdl-core");

export default function handler(req, res) {
	const { q = "" } = req.query;
	// console.log(q)
	// if (q === "") {
 //  return res.status(200).json([]);
	// }

	var opts = {
		maxResults: 20,
		type: "youtube#video",
		key: process.env.YOUTUBE_KEY,
	};

	search(q, opts, async (err, results) => {
		 // if (err) return res.status(400).json({message:"No se encontró video"});
			if(err)console.log("error",err)
		 console.log(results,"results",q)
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
