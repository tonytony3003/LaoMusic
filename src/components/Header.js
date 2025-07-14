import React from 'react';
import styled from 'styled-components';
import { FaMusic } from 'react-icons/fa';

const HeaderContainer = styled.div`
  padding: 10px 20px;
  background-color: #2D0707;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const SearchBar = styled.input`
  padding: 10px 25px;
  width: 350px;
  background-color: #441B1B;
  border: 1px solid #2D0707;
  border-radius: 20px;
`;

const CustomButton = styled.button`
  padding: 12px 15px;
  background-color: #ff4500; /* Màu cam */
  border: none;
  border-radius: 20px; /* Bo tròn button */
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #e03e00; /* Tùy chỉnh màu khi hover */
  }
`;

function Header() {
  return (
    <HeaderContainer>
      
      <SearchBar placeholder="Bạn muốn nghe gì" />
      <CustomButton>Đăng nhập</CustomButton>
    </HeaderContainer>
  );
}

export default Header;