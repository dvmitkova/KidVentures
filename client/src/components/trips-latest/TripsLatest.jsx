import { Box } from "@mui/material";
import TripsListItem from "../trips-all/trips-list-item/TripsListItem";
import { useEffect, useState } from "react";
import tripsAPI from "../../api/tripsAPI";

export default function TripsLatest() {
    const [latestTrips, setLatestTrips] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await tripsAPI.getLatest();

            setLatestTrips(result);
        })();
    }, [])
    
        return (
            <Box
            id="catalog-page"
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                padding: '20px'
            }}
        >
            {latestTrips.length > 0
                ? latestTrips.map(trip => <TripsListItem key={trip._id} {...trip} />)
                : <h3 style={{ textAlign: 'center', width: '100%', marginTop: '20px' }}>No trips yet</h3>
            }
        </Box>
        )
}