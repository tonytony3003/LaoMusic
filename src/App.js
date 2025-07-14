import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ErrorBoundary from './components/ErrorBoundary';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh; /* Đảm bảo chiều cao tối thiểu bằng viewport */
  background-color: #1a1a1a; /* Đặt background giống với thiết kế */
  color: #fff;
  overflow: visible;
  
`;

const MainContentWrapper = styled.div`
  margin-left: 220px; /* Độ rộng của sidebar (200px) + padding (20px) */
  padding: 20px;
  flex: 1;
  min-height: 100vh; /* Đảm bảo chiều cao tối thiểu */
  overflow: visible;
`;

function App() {
  return (
    <AppContainer>
      <ErrorBoundary>
        <Sidebar />
        <MainContentWrapper>
          <Header />
          <MainContent />
        </MainContentWrapper>
      </ErrorBoundary>
    </AppContainer>
  );
}

export default App;