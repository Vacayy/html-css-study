import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Container_white = styled.div`
  height: 100vh; // 전체 뷰포트 높이를 차지하도록 설정
  overflow: hidden; // 필요한 경우 내부 컨텐츠가 컨테이너를 넘어갈 때 숨김 처리
  display: flex;
  flex-direction: column;
  justify-content: center; // 섹션 내용을 수직 중앙 정렬
  align-items: center; // 섹션 내용을 수평 중앙 정렬
`;

const Container_grey = styled.div`
  height: 100vh; // 전체 뷰포트 높이를 차지하도록 설정
  width: 120vw;
  overflow: hidden; // 필요한 경우 내부 컨텐츠가 컨테이너를 넘어갈 때 숨김 처리
  display: flex;
  flex-direction: column;
  justify-content: center; // 섹션 내용을 수직 중앙 정렬
  align-items: center; // 섹션 내용을 수평 중앙 정렬
  background-color: #ECF9F7;
`;

const HiddenSection = styled.section`
  text-align: center;
  margin-top: 20rem;
  margin-bottom: 30rem;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
  visibility: hidden;
  &.show {
    opacity: 1;
    visibility: visible;
  }
`;


const LogoImage = styled.img`
  width: 100%; // 이미지 크기 조정이 필요하다면 여기서 설정
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: scale(1.1); // 호버 시 이미지 확대 효과
  }
`;


const LandingScroll = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        }, { threshold: 0.1 }); // threshold 값을 조정하여 요소가 얼마나 보여야 트리거할지 결정

        sectionsRef.current.forEach((el) => observer.observe(el));

        return () => sectionsRef.current.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <div>
            <Container_white>
                <HiddenSection ref={(el) => sectionsRef.current[0] = el}>
                    <h1>기능 1</h1>
                    <p>환영합니다</p>
                </HiddenSection>
            </Container_white>

            <Container_grey>
                <HiddenSection ref={(el) => sectionsRef.current[1] = el}>
                    <h1>기능 2</h1>
                    <p>누구나 따라할 수 있습니다</p>
                    <div>
                        {/* <LogoImage src="https://i.pinimg.com/originals/9e/2c/9d/9e2c9de6ef76ef5e95fcd3d1d6d67d81.jpg" alt="Logo A" /> */}
                    </div>
                </HiddenSection>
            </Container_grey>

            <Container_white>
                <HiddenSection ref={(el) => sectionsRef.current[2] = el}>
                    <h1>기능 3</h1>
                    <div className="logos">
                        <div>
                            {/* <LogoImage src="https://i.pinimg.com/originals/9e/2c/9d/9e2c9de6ef76ef5e95fcd3d1d6d67d81.jpg" alt="Logo" /> */}
                        </div>
                    </div>
                </HiddenSection>
            </Container_white>

            <Container_grey>
                <HiddenSection ref={(el) => sectionsRef.current[1] = el}>
                    <h1>기능 4</h1>
                    <p>누구나 따라할 수 있습니다</p>
                    <div>
                        {/* <LogoImage src="https://i.pinimg.com/originals/9e/2c/9d/9e2c9de6ef76ef5e95fcd3d1d6d67d81.jpg" alt="Logo A" /> */}
                    </div>
                </HiddenSection>
            </Container_grey>

        </div>
    );
}

export default LandingScroll;
