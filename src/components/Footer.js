import React from 'react';
import Logo from '../assets/images/logo-1.png';

const Footer = () => (
  <div className="footer" style={{ marginTop: '80px', backgroundColor: '#E6FFFD' }}>
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', padding: '40px', paddingTop: '24px', gap: '40px' }}>
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </div>
    <div>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', marginTop: '40px', textAlign: 'center', paddingBottom: '40px' }}>Developed by Samad</p>
    </div>
  </div>
);

export default Footer;
