import { useEffect, useState } from "react";
import tripsAPI from "../api/tripsAPI";

export function useTripsGetAll() {
    const [trips, setTrips] = useState([]);
    
    useEffect(() => {
        (async () => {
            const result = await tripsAPI.getAll();

            setTrips(result);
        })();
    }, []);

    return [trips, setTrips]
}

export function useTripsGetOne(tripId) {
  const [trip, setTrip] = useState({});


    useEffect(() => {
        (async () => {
          const result = await tripsAPI.getOne(tripId);
          setTrip(result);
        })();
    }, []);
    
    return [
        trip,
        setTrip
    ]
    
}