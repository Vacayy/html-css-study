import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

// Styled components based on the CSS content
const StyledBody = styled.div`
  background-color: #131316;
  color: #ffffff;
  padding: 0;
  margin: 0;
`;

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  align-content: center;
  min-height: 100vh;
`;

const Hidden = styled.div`
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all 2s;
`;

const Show = styled.div`
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
`;

const Logos = styled.div`
  display: flex;

  .logo:nth-child(2) {
    transition-delay: 200ms;
  }

  .logo:nth-child(3) {
    transition-delay: 400ms;
  }

  .logo:nth-child(4) {
    transition-delay: 600ms;
  }
`;

// const Logo = styled.div`
//   &.hidden {
//     opacity: 0; // Adjusting based on the corrected .hidden styles
//     filter: blur(5px);
//     transform: translateX(-100%);
//     transition: all 2s;
//   }

//   &.show {
//     opacity: 1;
//     filter: blur(0);
//     transform: translateX(0);
//   }
// `;

const Logo = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  filter: blur(${({ isVisible }) => (isVisible ? '0' : '5px')});
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '-100%')});
  transition: all 2s;
`;


// const ScrollPage = () => {
//   const observerRef = useRef(null);

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//           entry.target.classList.remove("hidden");
//         } else {
//           entry.target.classList.remove("show");
//           entry.target.classList.add("hidden");
//         }
//       });
//     });

//     const hiddenElements = document.querySelectorAll(".hidden");
//     hiddenElements.forEach((el) => observerRef.current.observe(el));

//     return () => {
//       if (observerRef.current) {
//         hiddenElements.forEach((el) => observerRef.current.unobserve(el));
//       }
//     };
//   }, []);

//   return (
//     <StyledBody>
//       <h1>Hello World</h1>
//       <StyledSection className="hidden">
//         <h1>Hi</h1>
//         <p>this is my website</p>
//       </StyledSection>
//       <StyledSection className="hidden">
//         <h2>Buy my product</h2>
//         <p>hihihihihihihihihi</p>
//         <Logo className="logo hidden">
//           <img src="https://i.pinimg.com/originals/9e/2c/9d/9e2c9de6ef76ef5e95fcd3d1d6d67d81.jpg" />
//         </Logo>
//       </StyledSection>
//       <StyledSection className="hidden">
//         <h2>It's really good</h2>
//         <Logos>
//           <Logo className="logo hidden">
//             <img src="https://i.pinimg.com/originals/9e/2c/9d/9e2c9de6ef76ef5e95fcd3d1d6d67d81.jpg" />
//           </Logo>
//           {/* Repeat for other logos */}
//         </Logos>
//       </StyledSection>
//     </StyledBody>
//   );
// };

// export default ScrollPage;

const ScrollPage = () => {
  // Create a state to track the visibility of each section
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, isIntersecting } = entry;
          setIsVisible((prevState) => ({
            ...prevState,
            [target.id]: isIntersecting,
          }));
        });
      },
      {
        threshold: 0.1, // Adjust based on when you want the section to be considered visible
      }
    );

    // Use IDs to uniquely identify each section
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      section.id = `section-${index}`; // Assign an ID if not already present
      observer.observe(section);
    });

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <StyledBody>
      <h1>Hello World</h1>
      {/* Use the state to conditionally apply styles */}
      <StyledSection id="section-1">
        <h1>Hi</h1>
        <p>this is my website</p>
      </StyledSection>
      <StyledSection id="section-2">
        <h2>Buy my product</h2>
        <p>hihihihihihihihihi</p>
        {/* Adjust Logo to use isVisible prop */}
        <Logo isVisible={!!isVisible['section-2']}>
          <img src="https://i.pinimg.com/originals/9e/2c/9d/9e2c9de6ef76ef5e95fcd3d1d6d67d81.jpg" />
        </Logo>
      </StyledSection>
      {/* Continue for other sections, adjusting IDs and using the isVisible state */}
    </StyledBody>
  );
};

export default ScrollPage;