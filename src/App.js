import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [home, setHome] = useState(false);

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar home={home} />
      <Routes>
        <Route path="/" element={<Home setHome={setHome} />} />
        <Route path="/exercise/:id" element={<ExerciseDetail setHome={setHome} />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
