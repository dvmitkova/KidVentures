import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TripsListItem({
    _id,
    title,
    imageUrl
}) {
    return (
      <div className="relative max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <Link to={`/trips/${_id}/details`} className="block">
          <img
              src={imageUrl}
              alt={title}
              className="w-full h-52 object-cover transition-opacity duration-300 ease-in-out"
          />
          <div className="p-4">
              <h5 className="text-xl font-bold text-gray-800">{title}</h5>
          </div>
      </Link>
  </div>
  );
}

