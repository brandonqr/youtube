import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { YoutubeEmbed } from "./YoutubeEmbed";
import { Button } from "@mui/material";

export default function ReviewCard({ video }) {
	const { id, link, title, thumbnails, url, channelTitle, info } = video;

	return (
		<Card sx={{ maxWidth: 853, width: 853, backgroundColor:'rgba(230, 230, 230, 1)' }}>

			<YoutubeEmbed url={url} />

			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{title}
				</Typography>
			</CardContent>
			<CardActions justify="center" sx={{flex:1, justifyContent:'center', display:'table-row'}}>
				<IconButton aria-label="share">

					<a
						target="_blank"
						filename="dep"
						without
						rel="noreferrer"
						href={info.video && info.video.url}
						download={title}
					>
						<Button fullWidth variant="outlined">
							DESCARGAR VIDEO
						</Button>
					</a>
					<a
						target="_blank"
						without
						rel="noreferrer"
						href={info.audio && info.audio.url}
						download={title}
					>
						<Button fullWidth variant="outlined">
							DESCARGAR AUDIO
						</Button>
					</a>
				</IconButton>
			</CardActions>
		</Card>
	);
}
