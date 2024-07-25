import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TripsListItem({
    _id,
    title,
    imageUrl
}) {
    return (
      <Card sx={{ width: 300, display: 'flex', flexDirection: 'column' }}>
        <CardActionArea component={Link} to={`/trips/${_id}/details`} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
          <CardContent sx={{ flex: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}

