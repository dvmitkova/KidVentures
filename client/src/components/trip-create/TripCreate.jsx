import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useForm } from "../../hooks/useForm";
import { useCreateTrip } from "../../hooks/useTrips";

const initialValues = {
  username: "",
  title: "",
  content: "",
  image: "",
};

export default function TripCreate() {
    const navigate = useNavigate()
    const createTrip = useCreateTrip();

    const createHandler = async (values) => {
      try {
          const { _id: tripId } = await createTrip(values);
          navigate(`/trips/${tripId}/details`);
      } catch (err) {
        alert(err.message)
      }
      
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    createHandler
  );

  return (
    <div className="flex flex-row justify-center items-start min-h-screen">
      <Card sx={{ width: "100%", maxWidth: 600, margin: 4 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", color: "#083344" }}
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
              label="Your Name"
              name="username"
              value={values.username}
              onChange={changeHandler}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
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
                  name="image"
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={changeHandler}
                />
                <PhotoCamera />
              </IconButton>
              {values.image && (
                <Typography variant="body2" color="text.secondary">
                  {values.image}
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
