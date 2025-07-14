import React, { useRef } from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 20px;
  color: #fff;
  background: linear-gradient(to bottom, #3A1414, #000000);
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
`;

const CardGridWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding: 0 40px;
`;

const CardGrid = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const CardContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const Card = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    opacity: 0.9;
  }
`;

const ScrollRightButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.5);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background-color: rgba(0,0,0,0.8);
  }
`;

export default function MainContent() {
  const gridRefs = useRef([]);

  const scrollRight = (sectionIndex) => {
    const grid = gridRefs.current[sectionIndex];
    if (grid) {
      grid.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const sections = [
    { title: 'Nghe gì hôm nay', images: 'artist' },
    { title: 'Nhạc TOP 100', images: 'top100' },
    { title: 'ຜ່ອນຄາຍ', images: 'artist' },
    { title: 'ເພງແທຣນ / ເພງຮາວສ໌ / ເພງເທັກໂນ', images: 'top100' },
    { title: 'ເພງເດັກນ້ອຍ', images: 'artist' },
    { title: 'Youtube Trending', images: 'top100' },
  ];

  return (
    <ContentContainer>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <SectionTitle>{section.title}</SectionTitle>
          <CardGridWrapper>
            <CardGrid ref={el => (gridRefs.current[sectionIndex] = el)}>
              {[...Array(10)].map((_, itemIndex) => (
                <CardContainer key={itemIndex}>
                  <Card>
                    <img
                      src={`/images/${section.images}${(itemIndex % 5) + 1}.jpg`}
                      alt={`Item ${itemIndex+1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Card>
                  {itemIndex === 6 && (
                    <ScrollRightButton onClick={() => scrollRight(sectionIndex)}>›</ScrollRightButton>
                  )}
                </CardContainer>
              ))}
            </CardGrid>
          </CardGridWrapper>
        </div>
      ))}
    </ContentContainer>
  );
}
