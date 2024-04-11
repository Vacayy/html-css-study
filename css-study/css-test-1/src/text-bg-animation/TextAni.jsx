import React from 'react';
import styled, { keyframes } from 'styled-components';
// import bg_image from '../assets/images/Vintage_Vinyl_Records_Avocado.jpeg';
import bg_image from '../assets/images/bg_img_two.jpeg';
import letsnote_logo from '../assets/images/letsnote.png';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; 
`;

const Header = styled.header`
  height: 65px;
  background-color: #00c73c;
`;

const Tablist = styled.div`
  height: 70px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Aside = styled.div`
  display: flex;
  flex: none;
  width: 45rem;
  background-color: #FFFFE9;
`;

const Main = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
`;

const animate = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const TextContainer = styled.div`
  height: 100vh;
  width: 100vw;  
  display: flex;
  justify-content: center;
//   align-items: center;
  align-items: flex-start;
  padding-top: 10vh; 
  font-family: 'Raleway', sans-serif;
//   background-color: #000;
  background-color: #FFFFE9;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 150px;
  color: rgba(225, 225, 225, .01);
//   background-image: url("https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2cf549433129d4227d1879347b9e78ce&auto=format&fit=crop&w=1248&q=80");
  background-image: url("https://i.pinimg.com/originals/3d/18/b1/3d18b166d16bd81b93e5a0a7cfef1b61.jpg");
//   background-image: url(${bg_image});
  background-repeat: repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${animate} 5s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`;

const Logo = styled.img`
  margin-top: 2vh; /* 조절 가능한 상단 여백 */
  width: 200px; /* 로고의 크기를 조절하려면 이 값을 변경 */
  height: auto;
`;

const TextAni = () => {
    return (
        <Wrap>
            {/* <Header> dd </Header>
            <Tablist> zz </Tablist> */}
            <Content>
                <Aside></Aside>
                <Main>
                    <TextContainer>
                        <Heading>Let's note!</Heading>
                        <Logo src={letsnote_logo} alt="Let's Note logo" />
                    </TextContainer>
                </Main>
            </Content>
        </Wrap>
    );
}

export default TextAni;