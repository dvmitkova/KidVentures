import Header from "../header/Header";
import TripsAll from "../trips-all/TripsAll";
import TripsLatest from "../trips-latest/TripsLatest"

export default function Home() {

  return (
    <div>
      <Header />
        <div className="bg-gradient-to-b from-amber-100 via-green-50 to-lime-100">
          <TripsLatest />
          <TripsAll />
        </div>
    </div>
  );
}