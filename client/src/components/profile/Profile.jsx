import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import UserCircleIcon from "@mui/icons-material/AccountCircle";
import { getUserDetails } from "../../api/auth-api";

export default function Profile() {
  const { userId } = useParams();
  const [profileData, setProfileData] = useState({
    about: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    profilePicture: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Fetch profile data based on userId
        const data = await getUserDetails(userId); // Adjust if needed for fetching specific user
        setProfileData(data);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    fetchProfileData();
  }, [userId]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Card sx={{ width: "100%", maxWidth: 600, margin: 2 }}>
        <CardContent>
          <div className="flex flex-col items-center">
            {profileData.profilePicture ? (
              <img
                src={profileData.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4"
              />
            ) : (
              <UserCircleIcon
                sx={{ fontSize: 100, color: "#a8a29e", marginBottom: 2 }}
              />
            )}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", marginBottom: 2, color: "#083344" }}
            >
              {profileData.about}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: 2, color: "#083344" }}
            >
              <strong>First Name:</strong> {profileData.firstName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: 2, color: "#083344" }}
            >
              <strong>Last Name:</strong> {profileData.lastName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: 2, color: "#083344" }}
            >
              <strong>Email:</strong> {profileData.email}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: 2, color: "#083344" }}
            >
              <strong>Country:</strong> {profileData.country}
            </Typography>
          </div>
          <div className="buttons flex flex-row justify-center">
            <Link
              to={`/user/profile-edit`}
              className="flex items-center justify-center w-24 mr-10 ml-10 p-2 bg-stone-200 text-cyan-950 rounded hover:bg-orange-200 hover:shadow"
            >
              Edit profile
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
