import { useEffect, useState } from "react";
import tripsAPI from "../api/tripsAPI";

export function useGamesGetAll() {
    const [trips, setTrips] = useState([]);
    
    useEffect(() => {
        (async () => {
            const result = await tripsAPI.getAll();

            setTrips(result);
        })();
    }, []);

    return [trips, setTrips]
}