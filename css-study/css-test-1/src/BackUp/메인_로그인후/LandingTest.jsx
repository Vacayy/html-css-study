import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import music_note from '../assets/images/music_notes.png';
import piano_img from '../assets/images/piano_img.png';
import workplace_img from '../assets/images/myWorkplace.png';
import snapshot_img from '../assets/images/mySnapshot.png';
import LandingScroll from './LandingScroll';
import { LandingTile } from './LandingTile';
import Header from './Header';

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

const moveForeverAnimation = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

const WaveHeader = styled.div`
  /* position: relative;   */
  text-align: center;   
  /* background: linear-gradient(60deg, #49C5B6 0%, rgba(0,172,193,1) 100%); */
  /* background: linear-gradient(60deg, #84c4bd 0%, #54c1cf 100%); */
  background: linear-gradient(60deg, #84c4bd 0%, rgba(0,172,193,1) 100%);
  color: white;
  /* height: 50vh; */
  height: 90vh;

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


const WavesContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: -7px; /* Safari 간격 문제 해결 */

  svg {
    display: block; // SVG가 컨테이너의 전체 너비를 차지하도록 함
    position: absolute;
    bottom: 0; // 헤더 영역의 하단에 파도가 위치하도록 함
  }

  .parallax > use {
    animation: ${moveForeverAnimation} 25s cubic-bezier(.55, .5, .45, .5) infinite;
  }

  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
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

const TileSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px; // 타일 간격 조정
  animation: ${fadeInUp} 2s ease-out forwards;

  & > * {    
    animation-delay: calc(var(--tile-index) * 1s);// 각 타일에 대한 지연 시간 설정
    animation-fill-mode: forwards;
  }
`;
// const TileSection = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 20px; // 타일 간격 조정
//   animation: ${fadeInUp} 2s ease-out forwards;

//   & > * {    
//     animation-delay: calc(var(--tile-index) * 0.2s); // 타일 인덱스에 따라 지연 시간 적용
//   }
// `;


// 타일 아래 부분

const ScrollableContent = styled.div`
  background-color: white;
  padding: 20px;
  height: 200vh; // 스크롤 가능한 높이 설정
  width: 100vw;
`;


const LandingTest = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <MusicNoteImage /> */}
      <WaveHeader>
        {/* <InnerHeader>
          <Title>Let's Note</Title>
        </InnerHeader> */}

        <TilesContainer>

          <TileSection>
            <LandingTile
              style={{ '--tile-index': '0' }}
              index={0}
              imgSrc={piano_img}
              title={"작업하기"}
              description={"누구나 음악을 연주하고, 나만의 작품을 남길 수 있어요"}
            />
            <LandingTile
              style={{ '--tile-index': '1' }}
              imgSrc={workplace_img}
              title={"내 작업실"}
              description={"이전 작업을 이어서 할 수 있어요"}
            />
            <LandingTile
              style={{ '--tile-index': '2' }}
              imgSrc={snapshot_img}
              title={"내 작품"}
              description={"내 작품들을 모아서 감상하세요"}
            />
            <LandingTile
              style={{ '--tile-index': '3' }}
              imgSrc={"https://i.pinimg.com/originals/48/1f/92/481f92a061e83e3cf32c683a1c808f79.jpg"}
              title={"구경하기"}
              description={"다른 사람의 작품을 구경하세요"}
            />
          </TileSection>
        </TilesContainer>

        <WavesContainer>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave"
                // d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                // d="M-160 44c30 0 58-10 88-10s 58 10 88 10 58-10 88-10 58 10 88 10 v44h-352z" />
                // d="M-160 44c30 0 58-4 88-4s 58 4 88 4 58-4 88-4 58 4 88 4 v44h-352z" />
                d="M-160 44c30 0 58-3 88-3s 58 3 88 3 58-3 88-3 58 3 88 3 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>

        </WavesContainer>
      </WaveHeader>
      <ScrollableContent>
        <LandingScroll />
      </ScrollableContent>
    </>
  );
}

export default LandingTest;
