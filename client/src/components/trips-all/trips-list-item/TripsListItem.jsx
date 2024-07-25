import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function TripsListItem({
    _id,
    title,
    content,
    imageUrl
}) {
  return (
    <Card sx={{ width: 300, height: 400 }}>
      <CardActionArea>
      <CardMedia
          component="img"
          sx={{
            height: 200, // Fixed height for image
            width: '100%', // Full width of the card
            objectFit: 'cover', // Crop the image to fit the fixed height
          }}
          image={imageUrl}
          alt={title}
        />
        <CardContent sx={{ height: 'calc(100% - 200px)' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
                  <Typography variant="body2" color="text.secondary">
                      {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

