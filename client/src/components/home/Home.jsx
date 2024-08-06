import BeatLoader from "react-spinners/BeatLoader";
import { useLoading } from "../../hooks/useLoading";
import Header from "../header/Header";
import TripsAll from "../trips-all/TripsAll";
import TripsLatest from "../trips-latest/TripsLatest"

export default function Home() {
  const { isLoading } = useLoading();

  return (
    <div>
      <Header />
      {isLoading ? ( // Conditionally render the spinner
        <div className="fixed inset-0 flex items-center justify-center bg-white opacity-75 z-50">
          <BeatLoader color="#164e63" /> {/* Using BeatLoader directly */}
        </div>
      ) : (
        <div className="bg-gradient-to-b from-amber-100 via-green-50 to-lime-100">
          <TripsLatest />
          <TripsAll />
        </div>
      )}
    </div>
  );
}