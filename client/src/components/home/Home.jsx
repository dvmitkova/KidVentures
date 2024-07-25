import Header from "../header/Header";
import TripsPopular from "../trips-popular/TripsPopular"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-amber-100 via-green-50 to-lime-100">
      <TripsPopular />
      </div>
    </div>
  );
}
