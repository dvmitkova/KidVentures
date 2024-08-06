import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { useTripsGetOne } from "../../hooks/useTrips";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import {
  useGetAllComments,
  useCreateComment,
} from "../../hooks/useCreateComment";
import { useAuthContext } from "../../contexts/AuthContext";
import tripsAPI from "../../api/tripsAPI";

const initialValues = {
  comment: "",
};

export default function TripDetails() {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const { tripId } = useParams();
  const [comments, setComments] = useGetAllComments(tripId);
  const createComment = useCreateComment();
  const [trip] = useTripsGetOne(tripId);
  const { isAuthenticated } = useAuthContext();
  const { userId } = useAuthContext();
  const {
    changeHandler,
    submitHandler,
    values
  } = useForm(initialValues, async ({ comment }) => {
      try {
        const newComment = await createComment(tripId, comment);

        setComments(oldComments => [...oldComments, newComment]);
      } catch (err) {
        alert(err.message);
      }
    }
    );
  
  const tripDeleteHandler = async () => {
    const isConfirmed = confirm(`Are you sure you want to delete ${trip.title}?`);

    if (!isConfirmed) {
      return
    }

    try {
      await tripsAPI.remove(tripId);
      navigate('/');
    } catch (err) {
      console.error(err.message)
    }
  }
  
  const isOwner = userId === trip._ownerId;

  const handleFavoriteToggle = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="flex flex-row justify-center items-start min-h-screen">
      <Card sx={{ width: "100%", height: "auto", margin: 4 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              height: 300,
              width: "100%",
              objectFit: "cover",
            }}
            image={trip.imageUrl}
            alt={trip.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", color: "#083344" }}
            >
              {trip.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#083344" }}
            >
              {trip.content}
            </Typography>
            <div className="mt-4 flex flex-col items-center">
              {isOwner && (<div className="buttons flex flex-row justify-center">
                <Link
                  to={`/trips/${tripId}/edit`}
                  className="flex items-center justify-center w-24 mr-10 ml-10 p-2 bg-stone-200 text-cyan-950 rounded hover:bg-orange-200 hover:shadow"
                >
                  Edit
                </Link>
                <button
                  type="submit"
                  onClick={tripDeleteHandler}
                  className="w-24 mr-10 p-2 bg-stone-200 text-cyan-950 rounded hover:bg-orange-200 hover:shadow"
                >
                  Delete
                </button>
              </div>
              )}
              {isAuthenticated && !isOwner && (<div className="favorite flex flex-col items-center space-y-2">
              <IconButton
                onClick={handleFavoriteToggle}
                aria-label="add to favorites"
              >
                {favorite ? (
                  <FavoriteIcon sx={{ fontSize: 40, color: "#fed7aa" }} />
                ) : (
                  <FavoriteBorderIcon sx={{ fontSize: 40, color: "#a8a29e" }} />
                )}
              </IconButton>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: favorite ? "#083344" : "#a8a29e",
                }}
              >
                {favorite ? "Added to favorites" : "Not a favorite"}
                </Typography>
                </div>)}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Comments Section */}
      <div className="flex flex-col items-center mr-10 w-full">
        <Card sx={{ width: "100%", maxWidth: 600, height: "auto", margin: 4 }}>
          <CardContent>
            {isAuthenticated && (
              <div>
                <div className="items-center text-sm font-medium">
                  <h1 className="text-xl font-bold text-cyan-950 mb-8">
                    Share your thoughts with us:
                  </h1>
                </div>
                <form onSubmit={submitHandler} className="space-y-4">
                  <div>
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={values.comment}
                      onChange={changeHandler}
                      className="mt-2 block w-full rounded-md border-gray-300 shadow focus:border-orange-200 focus:ring focus:ring-orange-200 focus:ring-opacity-100"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full p-2 bg-stone-200 text-cyan-950 rounded hover:bg-orange-200 hover:shadow"
                  >
                    Add comment
                  </button>
                </form>
              </div>
            )}
            <div className="items-center text-sm font-medium">
              <h1 className="text-xl font-bold text-cyan-950 mt-8 mb-6">
                All comments:
              </h1>
            </div>
            <div className="mt-4 space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment._id}
                  className="p-4 bg-white shadow rounded-md"
                >
                  <Typography
                    variant="body2"
                    color="#083344"
                    sx={{ fontWeight: "bold" }}
                  >
                    {comment.author?.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {comment.text}
                  </Typography>
                </div>
              ))}
              {comments.length === 0 && (
                <h3 className="text-cyan-950 mt-6">No comments yet.</h3>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
