import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";
import { useTripsGetOne } from "../../hooks/useTrips";
import tripsAPI from "../../api/tripsAPI";
import { useLoading } from "../../hooks/useLoading";

const initialValues = {
  title: "",
  content: "",
  imageUrl: "",
};

export default function TripEdit() {
  const { isLoading, setIsLoading } = useLoading();
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
        setIsLoading(true);
        try {
          await tripsAPI.update(tripId, values);
          navigate(`/trips/${tripId}/details`);
        } catch (err) {
          console.error("Failed to update trip:", err);
        } finally {
          setIsLoading(false);
        }
      }
    }
  );

  return (
    <div className="flex flex-row justify-center items-start min-h-screen">
      <Card sx={{ width: "100%", maxWidth: 600, margin: 2 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", color: "#083344" }}
          >
            Edit Your Journey
          </Typography>
          <form onSubmit={submitHandler} className="space-y-4 mt-8">
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
