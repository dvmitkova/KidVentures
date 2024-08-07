import { useEffect, useState } from "react";
import commentsAPI from "../api/commentsAPI";

export function useCreateComment() {
  const createHandler = (tripId, comment) =>
    commentsAPI.create(tripId, comment);

  return createHandler;
}

export function useGetAllComments(tripId) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await commentsAPI.getAll(tripId);
        setComments(result);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, [tripId]);

  return [comments, setComments];
}
