import { useNavigate } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useForm } from "../../hooks/useForm";
import { useCreateTrip } from "../../hooks/useTrips";
import { useState } from 'react';

const initialValues = {
  title: "",
  content: "",
  imageUrl: "",
};

export default function TripCreate() { 
    const createTrip = useCreateTrip();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const createHandler = async (values) => {
      try {
        const imageUrl = await handleImageUpload(selectedImage);
        const tripData = { ...values, imageUrl };

        const { _id: tripId } = await createTrip(tripData);
        navigate(`/trips/${tripId}/details`);
      } catch (err) {
        alert(err.message);
      }
    };

    const handleImageUpload = async (imageFile) => {
      if (!imageFile) return '';
      return URL.createObjectURL(imageFile);
    };

    const { values, changeHandler, submitHandler } = useForm(
      initialValues,
      createHandler
    );

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
      if (file) {
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
              sx={{ fontWeight: "bold", color: "#083344", marginBottom: 1 }}
            >
              Create Your Journey
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: 2, color: "#083344" }}
            >
              Share your unforgettable adventure with the world
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
                Submit Your Story
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
}
