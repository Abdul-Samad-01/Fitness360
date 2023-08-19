import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/icons/favicon.png';

const Navbar = ({ home }) => (
  <div className="navbar">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
      {home === true ? <Link to="/" className="linetransition" style={{ textDecoration: 'none', color: '#3A1212' }}>Home</Link> : null}
      <a href="#exercises" className="linetransition" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </div>
);

export default Navbar;
