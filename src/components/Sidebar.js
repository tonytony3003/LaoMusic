import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background: linear-gradient(to bottom, #3A1414, #000000);
  padding: 20px;
  color: #fff;
  min-height: 100vh; /* Sử dụng min-height để sidebar có thể mở rộng nếu cần */
  display: flex;
  flex-direction: column;
  position: fixed; /* Giữ sidebar cố định khi cuộn */
  top: 0; /* Cố định ở đầu trang */
  left: 0; /* Cố định ở bên trái */
  z-index: 1000; /* Đảm bảo sidebar nằm trên nội dung khác */
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #444;
  margin-bottom: 20px;
  background: linear-gradient(#F48700, #FC1301);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #333;
  }
  &.active {
    background-color: #2F1B1A;
    border-left: 4px solid #FF4319;
  }
  span {
    margin-left: 10px;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Logo>
        <img src="/favicon.ico" alt="Laomusic Logo" style={{ width: '40px', height: 'auto', marginRight: '10px' }} />
        laomusic
      </Logo>
      <MenuItem className="active">
        <span>🏠</span><span>Trang chủ</span>
      </MenuItem>
      <MenuItem>
        <span>📊</span><span>Bảng xếp hạng</span>
      </MenuItem>
      <MenuItem>
        <span>🎶</span><span>Chủ đề và thể loại</span>
      </MenuItem>
      <MenuItem>
        <span>📚</span><span>Thư viện</span>
      </MenuItem>
    </SidebarContainer>
  );
}

export default Sidebar;