import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrap = styled.div`
  margin: 50px auto 0 auto;
  width: 100%;
  display: flex;
  align-items: space-around;
  max-width: 1200px;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 400px;
  }
`;

const Tile = styled.div`
  width: 300px;
  height: 380px;
  margin: 10px;
  background-color: #99aeff;
  display: inline-block;
  background-size: cover;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease-out;
  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44);
  overflow: hidden;
  color: white;
  border-radius: 45px;
  font-family: 'Roboto';

  &:hover {
    box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);
    transform: scale(1.05);

    img {
      opacity: 0.2;
    }

    .animate-text {
      transform: translateX(0);
      opacity: 1;
    }

    span {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const TileImg = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: all 0.4s ease-out;
`;

const Text = styled.div`
  position: absolute;
  padding: 30px;
  height: calc(100% - 60px);
`;

const Heading1 = styled.h1`
  font-weight: 300;
  margin: 0;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const Heading2 = styled.h2`
  font-weight: 100;
  margin: 20px 0 0 0;
  font-style: italic;
  transform: translateX(200px);
  opacity: 0;
  transition: all 0.6s ease-in-out;
`;

const Paragraph = styled.p`
  font-weight: 300;
  margin: 20px 0 0 0;
  line-height: 25px;
  transform: translateX(-200px);
  transition-delay: 0.2s;
  opacity: 0;
  transition: all 0.6s ease-in-out;
`;

const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
  width: 30px;
  height: 30px;
  color: currentColor;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  span {
    width: 5px;
    height: 5px;
    background-color: currentColor;
    border-radius: 50%;
    display: block;
    opacity: 0;
    transition: transform 0.4s ease-out, opacity 0.5s ease;
    transform: translateY(30px);

    &:nth-child(1) {
      transition-delay: 0.05s;
    }
    &:nth-child(2) {
      transition-delay: 0.1s;
    }
    &:nth-child(3) {
      transition-delay: 0.15s;
    }
  }
`;

const UserPage = () => {
  return (
    <Wrap>
      {/* Tile 컴포넌트 반복 예시 */}
      <Tile>
        <TileImg src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80' />
        <Text>
          <Heading1>Lorem ipsum.</Heading1>
          <Heading2 className="animate-text">More lorem ipsum bacon ipsum.</Heading2>
          <Paragraph className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.</Paragraph>
          <Dots>
            {/* <span></span>
            <span></span>
            <span></span> */}
          </Dots>
        </Text>
      </Tile>
      <Tile>
        <TileImg src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80' />
        <Text>
          <Heading1>Lorem ipsum.</Heading1>
          <Heading2 className="animate-text">More lorem ipsum bacon ipsum.</Heading2>
          <Paragraph className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.</Paragraph>
          <Dots>
            {/* <span></span>
            <span></span>
            <span></span> */}
          </Dots>
        </Text>
      </Tile>
      <Tile>
        <TileImg src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80' />
        <Text>
          <Heading1>Lorem ipsum.</Heading1>
          <Heading2 className="animate-text">More lorem ipsum bacon ipsum.</Heading2>
          <Paragraph className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.</Paragraph>
          <Dots>
            {/* <span></span>
            <span></span>
            <span></span> */}
          </Dots>
        </Text>
      </Tile>
      {/* 여기에 다른 Tile 컴포넌트들을 추가하세요. */}
    </Wrap>
  );
}

export default UserPage;
