import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'animate.css/animate.min.css'; // 커스텀 css 스타일

// 스타일드 컴포넌트 정의
const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;

const Section = styled.section`
  position: relative;
  height: 200px;
  margin: 60px 0;
  &.section--purple {
    background-color: #D6A8E9;
  }
  &.section--blue {
    background-color: #33CCF7;
  }
  // 나머지 색상 클래스도 비슷한 방식으로 추가할 수 있습니다.
`;

const ColThird = styled.div`
  width: 32%;
  display: inline-block;
  float: left;
  margin-right: 2%;
  margin-bottom: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

// WOW.js 스크립트 로드를 위한 useEffect는 동일하게 유지
const ScrollAnimationComponent = () => {
  useEffect(() => {
    const wowScript = document.createElement('script');
    wowScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
    wowScript.async = true;
    document.body.appendChild(wowScript);

    wowScript.onload = () => {
      new WOW().init();
    };

    return () => document.body.removeChild(wowScript);
  }, []);

  return (
    <Container>
      <header>
        <h1>Animate on scroll with wow.js</h1>
      </header>
      {/* 컴포넌트 내용 */}
      <Section className="section--purple"></Section>
      <Section className="section--blue"></Section>
      <ColThird>
        {/* ColThird 내용 */}
      </ColThird>
      {/* 추가 컴포넌트 내용 */}
    </Container>
  );
};

export default ScrollAnimationComponent;