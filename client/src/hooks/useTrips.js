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
    }, [tripId]);
    
    return [
        trip,
        setTrip
    ]
    
}

export function useCreateTrip() {
    
    const tripCreateHandler = (tripData) => tripsAPI.create(tripData);

    return tripCreateHandler
}
