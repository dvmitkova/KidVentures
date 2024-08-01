import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Button, Card, CardContent, IconButton, TextField, Typography } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = {
    title: '',
    content: '',
    imageUrl: '',
}

export default function TripEdit() {
    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, () => {
        console.log(values);
    });
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = async (imageFile) => {
        if (!imageFile) return '';
  
        // Implement image upload logic here
        // For now, we'll return a placeholder URL
        // In a real application, you would upload the image to a server or cloud storage
        return URL.createObjectURL(imageFile);
      };

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
    )
}