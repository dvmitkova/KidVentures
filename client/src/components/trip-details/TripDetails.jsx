import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tripsAPI from "../../api/tripsAPI";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import commentsAPI from "../../api/commentsAPI";

export default function TripDetails() {
  const [trip, setTrip] = useState({});
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [favorite, setFavorite] = useState(false);
  const { tripId } = useParams();

  useEffect(() => {
    (async () => {
      const result = await tripsAPI.getOne(tripId);
      setTrip(result);
    })();
  }, []);

  const commentSubmitHandler = async (e) => {
    e.preventDefault();

    console.log(username, comment);

    const newComment = await commentsAPI.create(tripId, username, comment);

    //TODO: this should be refactored
    setTrip((prevState) => ({
      ...prevState,
      comments: {
        ...prevState.comments,
        [newComment._id]: newComment,
      },
    }));

    setUsername("");
    setComment("");
  };

  const handleFavoriteToggle = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="flex flex-row justify-center items-start min-h-screen">
    <Card sx={{ width: '100%', height: 'auto', margin: 4 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                sx={{
                    height: 300,
                    width: '100%',
                    objectFit: 'cover',
                }}
                image={trip.imageUrl}
                alt={trip.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#083344' }}>
                    {trip.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: '#083344' }}>
                    {trip.content}
                </Typography>
                <div className="mt-4 flex flex-col items-center">
                    <IconButton onClick={handleFavoriteToggle} aria-label="add to favorites">
                        {favorite ? (
                            <FavoriteIcon sx={{ fontSize: 40, color: '#fed7aa' }} />
                        ) : (
                            <FavoriteBorderIcon sx={{ fontSize: 40, color: '#a8a29e' }} />
                        )}
                    </IconButton>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', fontWeight: 'bold', color: favorite ? '#083344' : '#a8a29e' }}>
                        {favorite ? 'Added to favorites' : 'Not a favorite'}
                    </Typography>
                </div>
            </CardContent>
        </CardActionArea>
      </Card>
      
      {/* Comments Section */}
      <div className="flex flex-col items-center mr-10 w-full">
        <Card sx={{ width: '100%', maxWidth: 600, height: 'auto', margin: 4 }}>
          <CardContent>
          <div className="items-center text-sm font-medium">
              <h1 className="text-xl font-bold text-cyan-950 mb-8">Share your thoughts with us:</h1>
            </div>
            <form onSubmit={commentSubmitHandler} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow focus:border-orange-200 focus:ring focus:ring-orange-200 focus:ring-opacity-100"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow focus:border-orange-200 focus:ring focus:ring-orange-200 focus:ring-opacity-100"
                />
              </div>
              <button type="submit" className="w-full p-2 bg-stone-200 text-cyan-950 rounded hover:bg-orange-200 hover:shadow">
                Add comment
              </button>
            </form>
            <div className="mt-4 space-y-4">


              
              {Object.keys(trip.comments || {}).length > 0
                ? Object.values(trip.comments).map((comment) => (
                  <>
                  <div className="items-center text-sm font-medium">
                  <h1 className="text-xl font-bold text-cyan-950 mt-8 mb-6">All comments:</h1>
                </div>
                <div key={comment._id} className="p-4 bg-white shadow rounded-md">
                  <Typography variant="body2" color="#083344" sx={{ fontWeight: 'bold' }}>
                    {comment.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {comment.text}
                  </Typography>
                    </div>
                    </>
              ))
                : <h3 className="text-cyan-950 mt-6">No comments yet.</h3>
              }
            </div>
          </CardContent>
        </Card>
      </div>
</div>
  );
}
