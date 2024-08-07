import { useNavigate, useParams } from "react-router-dom";
import {
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
  const { setIsLoading } = useLoading();
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
              sx={{
                marginBottom: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#a5f3fc', 
                  },
                  '&:hover fieldset': {
                    borderColor: '#0891b2', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0891b2', 
                  },
                },
              }}
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
  sx={{
    marginBottom: 2,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#a5f3fc', 
      },
      '&:hover fieldset': {
        borderColor: '#0891b2', 
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0891b2', 
      },
    },
  }}
/>
            <button
              type="submit"
              className="w-36 mr-10 p-2 bg-stone-200 text-cyan-950 rounded hover:bg-cyan-100 hover:shadow"
            >
              Edit Your Story
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
