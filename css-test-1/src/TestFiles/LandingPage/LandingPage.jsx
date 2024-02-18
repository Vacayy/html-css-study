import React, { useState, useEffect } from 'react';
import styled, { css, createGlobalStyle, keyframes } from 'styled-components';
import music_note from '../../assets/images/music_notes.png';
import HeaderAnon from '../Common/HeaderAnon';
import LandingScroll from './LandingScroll';
import MainMenuTiles from './MainMenuTiles';
import WavesEffect from './WavesEffect';
import HeaderUser from '../Common/HeaderUser';

/* 가정 */
import AnonLandingContainer from '../Container/AnonLandingContainer';
import MyWorkspacesContainer from '../Container/MyWorkspacesContainer';
import MySnapshotsContainer from '../Container/MySnapshotsContainer';
import FeedContainer from '../Container/FeedContainer';
import LoginForm from '../Common/LoginForm';

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

const backgroundAnimationMode2 = keyframes`
  0% {
    height: 95vh;
    background: linear-gradient(60deg, #84c4bd 0%, rgba(0,172,193,1) 100%);
  }
  50% {
    height: 20vh;
    background: linear-gradient(60deg, #84c4bd 0%, rgba(0,172,193,1) 100%);
  }
  100% {
    height: 95vh;
    background: linear-gradient(60deg, #77a9d8 0%, #0271d9 100%); 
  }
`;

const backgroundAnimationMode3 = keyframes`
  0% {
    height: 95vh;
    background: linear-gradient(60deg, #84c4bd 0%, rgba(0,172,193,1) 100%);
  }
  50% {
    height: 20vh;
    background: linear-gradient(60deg, #84c4bd 0%, rgba(0,172,193,1) 100%);
  }
  100% {
    height: 95vh;
    background: linear-gradient(60deg, #eecbb2 0%, #f78a3c 100%); 
  }
`;

const backgroundAnimationMode4 = keyframes`
  0% {
    height: 95vh;
    background: linear-gradient(60deg, #84c4bd 0%, rgba(0,172,193,1) 100%);
  }
  100% {
    height: 25vh;
    background: linear-gradient(60deg, #e49b96 0%, #ee3c2f 100%);
  }
`;

const LandingMainContainer = styled.div`  
  position: relative;
  text-align: center;     
  background: linear-gradient(60deg, #84c4bd 0%, rgba(0,172,193,1) 100%);
  color: white;  
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;    

  ${({ mode }) => mode === 2 && css`
    animation: ${backgroundAnimationMode2} 1.7s ease-in-out forwards;
  `}

  ${({ mode }) => mode === 3 && css`
    animation: ${backgroundAnimationMode3} 1.7s ease-in-out forwards;
  `}

  ${({ mode }) => mode === 4 && css`
    animation: ${backgroundAnimationMode4} 1.5s forwards;
  `}

  @media (max-width: 768px) {
    height: 90vh;
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

const MainMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // 세로 방향 가운데 정렬
  align-items: center; // 가로 방향 가운데 정렬
  height: 100%; // 부모 컨테이너(WaveHeader)의 높이와 동일하게 설정
`;

// 메뉴별 스타일

// 타일 아래 부분

const ScrollableContent = styled.div`
  background-color: white;
  padding: 20px;
  height: 200vh; // 스크롤 가능한 높이 설정
  width: 100vw;
`;


const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState(0);
  const [showContainers, setShowContainers] = useState(false);

  useEffect(() => {
    if (mode === 2 || mode === 3 || mode === 4) {
      setTimeout(() => {
        setShowContainers(true);
      }, 1500);
    } else {
      setShowContainers(false);
    }
  }, [mode]);

  const login = () => {
    setIsLoggedIn(true);
    setMode(1);
  }

  const logout = () => {
    setIsLoggedIn(false);
    setMode(0);
  }

  const backToUserHome = () => { setMode(1); }
  const enterMyWorkspaces = () => { setMode(2); }
  const enterMySnapshots = () => { setMode(3); }
  const enterFeed = () => { setMode(4); }

  const renderMainContainer = () => {
    switch (mode) {
      case 0:
        return <AnonLandingContainer />;
      case 1:
        return (
          <MainMenuContainer>
            <MainMenuTiles
              enterMyWorkspaces={enterMyWorkspaces}
              enterMySnapshots={enterMySnapshots}
              enterFeed={enterFeed}
            />
          </MainMenuContainer>
        );
      case 2:
        return showContainers ? <MyWorkspacesContainer /> : null;
      case 3:
        return showContainers ? <MySnapshotsContainer /> : null;
      case 4:
        return showContainers ? <FeedContainer /> : null;
      default:
        return showContainers ? <AnonLandingContainer /> : null;
    }
  };

  return (
    <>
      <GlobalStyle />
      {isLoggedIn ? (
        <HeaderUser
          logout={logout}
          backToUserHome={backToUserHome}
          mode={mode}
        />
      ) : (
        <HeaderAnon login={login} />
      )
      }
      {/* <MusicNoteImage /> */}

      <LandingMainContainer mode={mode}>        
        {/* <InnerHeader>
          <Title>Let's Note</Title>
        </InnerHeader> */}

        <MainMenuContainer>
          {renderMainContainer()}
        </MainMenuContainer>
        <WavesEffect />

      </LandingMainContainer>


      <ScrollableContent>
        {/* <LoginForm /> */}
        <LandingScroll />
      </ScrollableContent>
    </>
  );
}

export default LandingPage;
