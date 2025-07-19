// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MusicPlayer from './components/MusicPlayer';
import ErrorBoundary from './components/ErrorBoundary';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column; /* bọc dọc */
  min-height: 100vh;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MainContentWrapper = styled.div`
  margin-left: 220px;
  padding: 20px;
  flex: 1;
`;

export default function App() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const tracks = [
    { name: 'Còn gì đau hơn chữ đã từng', url: '/music/ConGiDauHonChuDaTung-QuanAP-16057075.mp3' },
    { name: 'Đúng người đúng thời điểm', url: '/music/DungNguoiDungThoiDiem-ThanhHungIdol-6044113.mp3' },
    { name: 'Nơi này có anh', url: '/music/NoiNayCoAnh-SonTungMTP-4772041.mp3' },
    { name: 'Sunroof', url: '/music/Sunroof-NickyYouredazyManuelTurizo-7800844.mp3' },
    { name: 'Vũ trụ có anh', url: '/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3' },
  ];

  return (
    <AppContainer>
      <ErrorBoundary>
        <MainWrapper>
          <Sidebar />
          <MainContentWrapper>
            <Header />
            <MainContent
              tracks={tracks}
              setCurrentTrackIndex={setCurrentTrackIndex}
            />
          </MainContentWrapper>
        </MainWrapper>

        {/* ✅ Player cố định luôn hiển thị */}
        <MusicPlayer
          tracks={tracks}
          currentTrackIndex={currentTrackIndex}
          setCurrentTrackIndex={setCurrentTrackIndex}
        />
      </ErrorBoundary>
    </AppContainer>
  );
}
