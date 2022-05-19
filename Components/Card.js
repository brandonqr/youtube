import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { YoutubeEmbed } from './YoutubeEmbed';
import { Button } from '@mui/material';

export default function ReviewCard({video}) {
  const {id,link,title,thumbnails,url,channelTitle,info} = video


  return (
    <Card sx={{ maxWidth: 853, width:853 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={channelTitle}
      />
      <YoutubeEmbed url={url}/>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
          {/* <Button onClick={()=>}>Descargar musica</Button> */}
          <a target='_blank' filename="dep" without rel="noreferrer" href={info.video.url} download={title}>video</a>
          <a target='_blank' without rel="noreferrer" href={info.audio.url} download={title}>audio</a>
        </IconButton>
       
      </CardActions>
    </Card>
  );
}
