import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserCircleIcon from '@mui/icons-material/AccountCircle';

export default function Profile() {
  const [profileData, setProfileData] = useState({
    username: '',
    about: '',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle the submit logic
    console.log(profileData);
  };

  return (
    <div className="flex flex-row justify-center items-start min-h-screen">
      <Card sx={{ width: '100%', maxWidth: 800, margin: 4 }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#083344' }}>
            Your Profile
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2, color: '#083344' }}>
            This information will be displayed publicly. Please be mindful of what you share.
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              label="Username"
              name="username"
              value={profileData.username}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
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
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2, color: '#083344' }}>
              A few sentences about yourself.
            </Typography>
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
              <UserCircleIcon sx={{ fontSize: 40, color: '#a8a29e' }} />
              <Button variant="contained" component="label" sx={{ backgroundColor: '#083344', color: '#fff' }}>
                Change Profile Picture
                <input hidden accept="image/*" type="file" />
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
