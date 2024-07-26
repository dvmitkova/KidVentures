import TripsListItem from "./trips-list-item/TripsListItem";
import { Box } from "@mui/material";
import { useGamesGetAll } from "../../hooks/useTrips";

export default function TripsAll() {
        const [trips] = useGamesGetAll()
    
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
            {trips.length > 0
                ? trips.map(trip => <TripsListItem key={trip._id} {...trip} />)
                : <h3 style={{ textAlign: 'center', width: '100%', marginTop: '20px' }}>No trips yet</h3>
            }
        </Box>
        )
}