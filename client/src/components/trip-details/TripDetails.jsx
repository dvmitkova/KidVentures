import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tripsAPI from '../../api/tripsAPI';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import commentsAPI from '../../api/commentsAPI';

export default function TripDetails() {
    const [trip, setTrip] = useState({});
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const { tripId } = useParams();
  
    useEffect(() => {
      (async () => {
        const result = await tripsAPI.getOne(tripId);
        setTrip(result);
      })();
    }, []);
  
    const commentSubmitHandler = async (e) => {
      e.preventDefault();
  
      const newComment = await commentsAPI.create(tripId, username, comment);
  
      //TODO: this should be refactored
      setTrip((prevState) => ({
        ...prevState,
        comments: {
          ...prevState.comments,
          [newComment._id]: newComment,
        },
      }));
        
        setUsername('');
        setComment('');
        
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card sx={{ width: 600, height: 'auto', margin: 4 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              height: 300, // Fixed height for image
              width: '100%', // Full width of the card
              objectFit: 'cover', // Crop the image to fit the fixed height
            }}
            image={trip.imageUrl}
            alt={trip.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {trip.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {trip.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}