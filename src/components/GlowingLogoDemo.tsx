import React from 'react';
import GlowingLogo from './GlowingLogo';

const GlowingLogoDemo: React.FC = () => {
  return (
    <div style={{ 
      background: '#000', 
      minHeight: '100vh', 
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3rem'
    }}>
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: '2.5rem' }}>
        GlowingLogo Component Demo
      </h1>
      
      {/* Default configuration with sparks */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Default (Amber → Gold → Magenta) with Sparks</h2>
        <GlowingLogo
          src="/logo.png" // Replace with your actual logo path
          alt="Fit Mit Kash Logo"
          size={400}
          showSparks={true}
          showRing={true}
        />
      </div>
      
      {/* Custom colors with enhanced sparks */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Custom Colors (Blue → Purple → Pink) with Sparks</h2>
        <GlowingLogo
          src="/logo.png" // Replace with your actual logo path
          alt="Fit Mit Kash Logo"
          size={350}
          colors={['#4A90E2', '#9B59B6', '#E91E63']}
          intensity={0.9}
          showSparks={true}
          showRing={true}
        />
      </div>
      
      {/* Without ring but with sparks */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Without Outer Ring (Sparks Only)</h2>
        <GlowingLogo
          src="/logo.png" // Replace with your actual logo path
          alt="Fit Mit Kash Logo"
          size={300}
          showRing={false}
          showSparks={true}
          intensity={0.8}
        />
      </div>
      
      {/* Without sparks but with ring */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Without Sparks (Ring Only)</h2>
        <GlowingLogo
          src="/logo.png" // Replace with your actual logo path
          alt="Fit Mit Kash Logo"
          size={250}
          showSparks={false}
          showRing={true}
          intensity={0.7}
        />
      </div>
      
      {/* High intensity with all effects */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>High Intensity (All Effects)</h2>
        <GlowingLogo
          src="/logo.png" // Replace with your actual logo path
          alt="Fit Mit Kash Logo"
          size={200}
          intensity={1.0}
          colors={['#FF6B35', '#FFD700', '#FF1493']}
          showSparks={true}
          showRing={true}
        />
      </div>
      
      {/* Minimal configuration */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Minimal (No Ring, No Sparks)</h2>
        <GlowingLogo
          src="/logo.png" // Replace with your actual logo path
          alt="Fit Mit Kash Logo"
          size={180}
          showSparks={false}
          showRing={false}
          intensity={0.6}
        />
      </div>
      
      {/* Fiery theme with maximum effects */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Fiery Theme (Maximum Effects)</h2>
        <GlowingLogo
          src="/logo.png" // Replace with your actual logo path
          alt="Fit Mit Kash Logo"
          size={320}
          colors={['#FF4500', '#FF8C00', '#FFD700']}
          intensity={1.0}
          showSparks={true}
          showRing={true}
        />
      </div>
    </div>
  );
};

export default GlowingLogoDemo;
