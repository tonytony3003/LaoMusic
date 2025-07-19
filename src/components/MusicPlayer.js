import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function MusicPlayer({ tracks, currentTrackIndex, setCurrentTrackIndex }) {
  if (!tracks || tracks.length === 0) return null;

  const handleClickNext = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
  };

  const handleClickPrevious = () => {
    setCurrentTrackIndex((currentTrackIndex - 1 + tracks.length) % tracks.length);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        background: '#181818',
        zIndex: 9999,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#fff',
        }}
      >
        <div style={{ flex: 1 }}>
          <strong>{tracks[currentTrackIndex].name}</strong>
        </div>
        <div style={{ flex: 3 }}>
          <AudioPlayer
            src={tracks[currentTrackIndex].url}
            autoPlay
            showSkipControls
            showJumpControls={false}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
            style={{
              background: 'transparent',
              boxShadow: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}
