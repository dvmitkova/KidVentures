import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import TripsLatest from "./components/trips-latest/TripsLatest";
import TripCreate from "./components/trip-create/TripCreate";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import TripsAll from "./components/trips-all/TripsAll";
import TripDetails from "./components/trip-details/TripDetails";
import useScrollToTop from "./hooks/useScrollToTop";
import { AuthContextProvider } from "./contexts/AuthContext";
import Logout from "./components/logout/Logout";
import TripEdit from "./components/trip-edit/TripEdit";
import RouteGuard from "./components/common/RouteGuard";
import ProfileEdit from "./components/profile-edit/ProfileEdit";
import GuestGuard from "./components/common/GuestGuard";
import { LoadingProvider } from "./hooks/useLoading";
import NotFound from "./components/not-found/NotFound";

function App() {
  useScrollToTop();

  return (
    <AuthContextProvider>
      <div id="box">
        <Navbar />
        <main id="main">
          <LoadingProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trips/latest" element={<TripsLatest />} />
              <Route path="/trips/all" element={<TripsAll />} />
              <Route path="/trips/:tripId/details" element={<TripDetails />} />

              <Route element={<GuestGuard />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route element={<RouteGuard />}>
                <Route path="/user/profile" element={<Profile />} />
                <Route path="/user/profile-edit" element={<ProfileEdit />} />
                <Route path="/trips/create" element={<TripCreate />} />
                <Route path="/trips/:tripId/edit" element={<TripEdit />} />
                <Route path="/logout" element={<Logout />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LoadingProvider>
        </main>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
