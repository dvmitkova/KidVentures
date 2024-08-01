import { useNavigate, useParams } from "react-router-dom";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useTripsGetOne } from "../../hooks/useTrips";
import tripsAPI from "../../api/tripsAPI";

const initialValues = {
  title: "",
  content: "",
  imageUrl: "",
};

export default function TripEdit() {
  const navigate = useNavigate();
  const { tripId } = useParams();
  const [trip] = useTripsGetOne(tripId);
  const initialFormValues = useMemo(
    () => Object.assign({}, initialValues, trip),
    [trip]
  );
  const { changeHandler, submitHandler, values } = useForm(
    initialFormValues,
    async (values) => {
      const isConfirmed = confirm("Are you sure you want to update your trip?");

      if (isConfirmed) {
        await tripsAPI.update(tripId, values);

        navigate(`/trips/${tripId}/details`);
      }
    }
  );

  const [setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    if (file) {
      // Update the image URL field (used in case of immediate preview)
      values.imageUrl = URL.createObjectURL(file);
    }
  };

  return (
    <div className="flex flex-row justify-center items-start min-h-screen">
      <Card sx={{ width: "100%", maxWidth: 600, margin: 4 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", color: "#083344" }}
          >
            Edit Your Journey
          </Typography>
          <form onSubmit={submitHandler} className="space-y-4">
            <TextField
              label="Trip Title"
              name="title"
              value={values.title}
              onChange={changeHandler}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Description"
              name="content"
              value={values.content}
              onChange={changeHandler}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <div className="flex items-center space-x-2">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleFileChange}
                />
                <PhotoCamera />
              </IconButton>
              {values.imageUrl && (
                <Typography variant="body2" color="text.secondary">
                  {values.imageUrl}
                </Typography>
              )}
            </div>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#083344", color: "#fff", marginTop: 2 }}
            >
              Edit Your Story
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
