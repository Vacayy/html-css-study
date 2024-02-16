import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import music_note from '../../assets/images/music_notes.png';
import LandingScroll from './LandingScroll';
import Header from '../Common/Header';
import MainMenuTiles from './MainMenuTiles';
import WavesEffect from './WavesEffect';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400');
  body, h1, p {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Lato', sans-serif;
  }
  h1 {
    font-weight: 300;
    letter-spacing: 2px;
    font-size: 48px;
  }
  p {
    letter-spacing: 1px;
    font-size: 14px;
    color: #333333;
  }
`;


const LandingMainContainer = styled.div`  
  text-align: center;     
  background: linear-gradient(60deg, #84c4bd 0%, rgba(0,172,193,1) 100%);
  color: white;  
  height: 95vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between; 

  @media (max-width: 768px) {
    height: 60vh; /* 작은 화면에서는 높이를 60%로 조정 */
  }
`;

const InnerHeader = styled.div`
  display: flex;
  justify-content: center; // 가운데 정렬
  align-items: center; // 세로 방향 가운데 정렬
  width: 100%; // 너비를 부모 컨테이너의 100%로 설정
  height: 100%; // 높이를 부모 컨테이너의 100%로 설정
  position: relative; // 절대 위치 지정된 자식 요소를 위한 상대 위치
`;

const Title = styled.h1`
  font-family: 'Lato', sans-serif; // Lato 폰트 적용
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 48px; // 기본 글자 크기
  color: white; // 글자 색상

  @media (max-width: 768px) {
    font-size: 24px; // 화면 크기가 768px 이하일 때 글자 크기 조정
  }
`;


// wave header 뒤에 입힐 이미지 컴포넌트
const MusicNoteImage = styled.div`
  position: absolute; // WaveHeader 내에서 자유롭게 위치 조정을 위해 절대 위치 사용
  top: 10rem; // 상단에서부터 50% 위치에 배치하여 중앙에 오도록 함
  left: 70rem; // 좌측에서부터 50% 위치에 배치
  transform: translate(-50%, -50%); // 정확한 중앙 정렬을 위한 조정
  width: 900px; // 이미지의 너비 설정
  height: 900px; // 이미지의 높이 설정
  background-image: url(${music_note}); // import한 이미지를 배경 이미지로 사용
  background-size: cover; // 배경 이미지가 컨테이너를 꽉 채우도록 설정
  z-index: 0;

`;


// 타일 부분
const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // 세로 방향 가운데 정렬
  align-items: center; // 가로 방향 가운데 정렬
  height: 100%; // 부모 컨테이너(WaveHeader)의 높이와 동일하게 설정
`;


// 타일 아래 부분

const ScrollableContent = styled.div`
  background-color: white;
  padding: 20px;
  height: 200vh; // 스크롤 가능한 높이 설정
  width: 100vw;
`;


const LandingPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <MusicNoteImage /> */}

      <LandingMainContainer>
        {/* <InnerHeader>
          <Title>Let's Note</Title>
        </InnerHeader> */}

        <TilesContainer>
          <MainMenuTiles />
        </TilesContainer>

        <WavesEffect />

      </LandingMainContainer>


      <ScrollableContent>
        <LandingScroll />
      </ScrollableContent>
    </>
  );
}

export default LandingPage;
