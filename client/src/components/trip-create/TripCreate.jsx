import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function TripCreate() {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle the submit logic
    console.log({ username, title, content, image });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="flex flex-row justify-center items-start min-h-screen">
      <Card sx={{ width: '100%', maxWidth: 600, margin: 4 }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#083344' }}>
            Create Your Journey
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2, color: '#083344' }}>
            Share your unforgettable adventure with the world
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              label="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Trip Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Description"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <div className="flex items-center space-x-2">
              <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={handleImageChange} />
                <PhotoCamera />
              </IconButton>
              {image && <Typography variant="body2" color="text.secondary">{image.name}</Typography>}
            </div>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#083344', color: '#fff', marginTop: 2 }}>
              Submit Your Story
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
