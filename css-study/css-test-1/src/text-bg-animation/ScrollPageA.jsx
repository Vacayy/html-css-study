import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
//react-fullpage 설치 필요 (npm install @fullpage/react-fullpage)

const NavHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: transparent;
  z-index: 10;
  transition: background 0.3s ease-in-out;

  &.scrolled {
    background: #000; /* 스크롤 시 배경 변경 */
  }

  .nav-brand img {
    width: 50px;
  }

  .header-links ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0 10px;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FullPageContainer = styled.div`
  /* If using fullpage.js or similar, you might not need this */
`;

// More styled components following the CSS structure...


const ScrollPageA = () => {
    const holderRef = useRef(null);


    useEffect(() => {
        let i = 0;
        const text = "WEB DESIGNER + FRONT-END DEVELOPER";
        const speed = 80;

        function typeWriter() {
            if (i < text.length) {
                if (holderRef.current) {
                    holderRef.current.innerHTML += text.charAt(i);
                }
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();
    }, []);

    // 스크롤 관련 로직
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ReactFullpage
            navigation={true}
            sectionsColor={['#ff5f45', '#0798ec', '#4BBFC3', '#7BAABE']}
            anchors={['home', 'about', 'portfolio', 'contact']}
            menu={'#myMenu'}
            scrollingSpeed={1000}

            render={({ state, fullpageApi }) => (
                <ReactFullpage.Wrapper>
                    <Section className="aboutme" data-anchor="aboutme">
                        {/* 섹션 내용 */}
                    </Section>
                    {/* 추가 섹션... */}
                    <NavHeader style={{ background: isScrolled ? '#000' : 'transparent' }}>
                        {/* 내용 */}
                    </NavHeader>
                </ReactFullpage.Wrapper>
            )}
        />
    );
};

export default ScrollPageA;