import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useForm } from "../../hooks/useForm";
import { useCreateTrip } from "../../hooks/useTrips";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const initialValues = {
  title: "",
  content: "",
  imageUrl: "",
};

export default function TripCreate() {
  const createTrip = useCreateTrip();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createHandler = async (values) => {
    setIsLoading(true);
    try {
      const imageUrl = selectedImage ? URL.createObjectURL(selectedImage) : "";
      const tripData = { ...values, imageUrl };

      const { _id: tripId } = await createTrip(tripData);
      navigate(`/trips/${tripId}/details`);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    createHandler
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      values.imageUrl = URL.createObjectURL(file);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white opacity-75 z-50">
          <BeatLoader color="#083344" />
        </div>
      )}
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
              <div className="flex flex-row items-center justify-center space-x-10 space-y-4">
                <div className="flex items-center">
                  <IconButton
                    color="default"
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
                </div>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Selected"
                    className="rounded border border-gray-300"
                    style={{
                      width: "100px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
              <div className="mb-12 pb-1 pt-1 text-center">
                <button
                  className="w-full p-2 font-semibold bg-stone-200 text-cyan-950 rounded hover:bg-cyan-100 hover:shadow"
                  type="submit"
                >
                  Submit your story
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
