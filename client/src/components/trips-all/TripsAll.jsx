import TripsListItem from "./trips-list-item/TripsListItem";
import { Box } from "@mui/material";
import { useTripsGetAll } from "../../hooks/useTrips";
import { useLoading } from "../../hooks/useLoading";
import { useEffect } from "react";

export default function TripsAll() {
  const [trips] = useTripsGetAll();
  const { isLoading, setIsLoading } = useLoading();

  // Ensuring isLoading is set to true while fetching trips
  useEffect(() => {
    if (trips.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [trips, setIsLoading]);

  return (
    <section>
      <div className="top-20 left-0 right-0 mx-auto max-w-2xl text-center">
        <h1 className="text-3xl p-10 font-bold text-cyan-800 sm:text-3xl">
          All Trips
        </h1>
      </div>

        <Box
          id="catalog-page"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {trips.length > 0 ? (
            trips.map((trip) => <TripsListItem key={trip._id} {...trip} />)
          ) : (
            <h3 style={{ textAlign: "center", width: "100%", marginTop: "20px" }}>
              No trips yet
            </h3>
          )}
        </Box>
    </section>
  );
}
