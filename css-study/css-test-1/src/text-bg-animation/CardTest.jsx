import React, { useState, useRef, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 40px 0;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-weight: 500;
    background-color: #BCAAA4;
    -webkit-font-smoothing: antialiased;
  }

  .title {
    font-family: "Raleway", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #5D4037;
    text-align: center;
  }

  p {
    line-height: 1.5em;
  }

  h1+p, p+p {
    margin-top: 10px;
  }
`;

// 스타일 컴포넌트 선언
const CardWrap = styled.div`
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
`;

const CardStyled = styled.div`
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

const CardInfo = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  p {
    opacity: 0;
    text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
    transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
    opacity: 0;
    transform: translateY(100%);
    transition: opacity 5s cubic-bezier(0.445, 0.05, 0.55, 0.95), transform 5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`;

const CardBg = styled.div`
  opacity: 0.5;
  position: absolute;
  top: -20px; left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s ${({ theme }) => theme.returnEasing}, opacity 5s 1s ${({ theme }) => theme.returnEasing};
  pointer-events: none;
`;


const CardTest = ({ dataImage, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.pageX - (left + window.pageXOffset) - width / 2) / width * 30; // 30은 회전 각도의 스케일입니다.
        const y = (e.pageY - (top + window.pageYOffset) - height / 2) / height * -30; // 마이너스 값은 Y축 회전 방향을 반대로 합니다.

        cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`; // 마우스가 떠나면 원래 위치로 복귀
    };

    return (
        <CardWrap
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}>
            <CardStyled>
                <CardBg style={{
                    backgroundImage: `url(${dataImage})`,
                    opacity: isHovered ? 0.8 : 0.5,
                    transform: isHovered ? 'translateX(0) translateY(0)' : 'translateX(-20px) translateY(-20px)'
                }}></CardBg>
                <CardInfo style={{
                    transform: isHovered ? 'translateY(0)' : 'translateY(40%)',
                    opacity: isHovered ? 1 : 0
                }}>
                    {children}
                </CardInfo>
            </CardStyled>
        </CardWrap>
    );
};

export default CardTest;
