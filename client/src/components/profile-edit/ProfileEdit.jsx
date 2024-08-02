import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserCircleIcon from '@mui/icons-material/AccountCircle';

export default function ProfileEdit() {
  const [profileData, setProfileData] = useState({
    username: '',
    about: '',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    profilePicture: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setProfileData({ ...profileData, profilePicture: fileUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle the submit logic
    console.log(profileData);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <Card sx={{ width: '100%', maxWidth: 800, margin: 4 }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#083344' }}>
            Edit Your Profile
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              label="About"
              name="about"
              value={profileData.about}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="First Name"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={profileData.lastName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Email Address"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Country"
              name="country"
              value={profileData.country}
              onChange={handleChange}
              fullWidth
              select
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              sx={{ marginBottom: 2 }}
            >
              <option value="">Select your country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </TextField>
            <div className="flex items-center space-x-2">
              {profileData.profilePicture ? (
                <img
                  src={profileData.profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4"
                />
              ) : (
                <UserCircleIcon sx={{ fontSize: 40, color: '#a8a29e' }} />
              )}
              <Button variant="contained" component="label" sx={{ backgroundColor: '#083344', color: '#fff' }}>
                Change Profile Picture
                <input hidden accept="image/*" type="file" onChange={handleFileChange} />
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Button
                type="button"
                onClick={() => setProfileData({
                  username: '',
                  about: '',
                  firstName: '',
                  lastName: '',
                  email: '',
                  country: '',
                  profilePicture: '',
                })}
                sx={{ color: '#083344' }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#083344', color: '#fff' }}
              >
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
