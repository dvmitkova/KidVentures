import { Box } from "@mui/material";
import TripsListItem from "../trips-all/trips-list-item/TripsListItem";
import { useState, useEffect } from "react";
import tripsAPI from "../../api/tripsAPI";
import { useLoading } from "../../hooks/useLoading";
export default function TripsLatest() {
  const [latestTrips, setLatestTrips] = useState([]);
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    const fetchLatestTrips = async () => {
      setIsLoading(true);
      try {
        const result = await tripsAPI.getAll();
        setLatestTrips(result.reverse().slice(0, 3));
      } catch (error) {
        console.error("Error fetching latest trips:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestTrips();
  }, [setIsLoading]);

  return (
    <section>
      <div className="top-20 left-0 right-0 mx-auto max-w-2xl text-center">
        <h1 className="text-3xl p-10 font-bold text-cyan-800 sm:text-3xl">
          Latest Trips
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
          {latestTrips.length > 0 ? (
            latestTrips.map((trip) => <TripsListItem key={trip._id} {...trip} />)
          ) : (
            <h3 style={{ textAlign: "center", width: "100%", marginTop: "20px" }}>
              No trips yet
            </h3>
          )}
        </Box>
    </section>
  );
}
