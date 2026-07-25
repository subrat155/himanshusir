/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MusicPlayer from './components/MusicPlayer';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import Gallery from './components/Gallery';
import CelebrationZone from './components/CelebrationZone';
import Footer from './components/Footer';
import FloatingTechIcons from './components/FloatingTechIcons';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <FloatingTechIcons />
          <MusicPlayer />
          <Hero />
          <AboutAndSkills />
          <Gallery />
          <CelebrationZone />
          <Footer />
        </>
      )}
    </div>
  );
}


