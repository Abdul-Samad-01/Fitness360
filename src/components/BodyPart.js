import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
          borderTop: '4px solid #4F46E5',
          background: '#fff',
          borderRadius: '20px',
          width: '270px',
          height: '282px',
          cursor: 'pointer',
          gap: '47px',
          boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
        }
        : {
          background: '#fff',
          borderRadius: '20px',
          width: '270px',
          height: '282px',
          cursor: 'pointer',
          gap: '47px',
          boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
        }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '100px', height: '100px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
