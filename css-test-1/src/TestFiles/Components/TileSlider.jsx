import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { CommonTile } from '../Common/CommonTile';

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

const TilesSliderContainer = styled.div`
  /* position: relative;
  left: 5.2rem; */
  display: flex;
  align-items: center;  
  /* max-width: 95vw; */
  max-width: 98vw;
  min-height: 60vh;
  max-height: 60vh;
  padding: 1rem;
  gap: 1rem;  
  border-radius: 0.5rem;
  overflow-x: auto;
  cursor: grab;
  user-select: none;
  z-index: 10;
  animation: ${fadeInUp} 2s ease-out forwards;

  &:active {
    cursor: grabbing;
  }

  // 웹킷 기반 브라우저에서 스크롤바 숨기기
  &::-webkit-scrollbar {
    display: none;
  }

  // 파이어폭스에서 스크롤바 숨기기
  scrollbar-width: none;

  
`;


const TileSlider = () => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const [dragged, setDragged] = useState(false);

    const startDragging = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setDragged(false);
        setVelocity(0);
    };

    const stopDragging = (e) => {
        setIsDragging(false);
        if (Math.abs(e.pageX - startX) > 10) {
            setDragged(true);
        }

    };

    const onDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 0.1; // 드래그 민감도 조정
        carouselRef.current.scrollLeft -= walk;
        setVelocity(walk);
    };

    useEffect(() => {
        const slide = () => {
            if (Math.abs(velocity) <= 0.1) {
                clearInterval(intervalId);
                return;
            }
            // endScrollLeft를 기준으로 추가적인 스크롤 이동을 적용
            const newScrollLeft = carouselRef.current.scrollLeft - velocity;
            carouselRef.current.scrollLeft = newScrollLeft;
            setVelocity(velocity * 0.92); // 속도 감소
            console.log("미끄러지는 중");
        };

        let intervalId;

        if (!isDragging) {
            intervalId = setInterval(slide, 10);
        }

        return () => clearInterval(intervalId);
    }, [isDragging, velocity]);

    const handleClick = (e) => {
        if (dragged) {
            e.stopPropagation();
            return;
        }
        console.log("Carousel Item 클릭됨");
    };

    return (
        <>
            <TilesSliderContainer
                ref={carouselRef}
                onMouseDown={startDragging}
                onMouseLeave={stopDragging}
                onMouseUp={stopDragging}
                onMouseMove={onDrag}
            >
                <CommonTile
                    onClick={handleClick}
                    imgSrc={"https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"}
                    title={"제목 테스트"}
                    description={"설명 테스트"}
                />
                <CommonTile
                    onClick={handleClick}
                    imgSrc={"https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"}
                    title={"제목 테스트"}
                    description={"설명 테스트"}
                />
                <CommonTile
                    onClick={handleClick}
                    imgSrc={"https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"}
                    title={"제목 테스트"}
                    description={"설명 테스트"}
                />
                <CommonTile
                    onClick={handleClick}
                    imgSrc={"https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"}
                    title={"제목 테스트"}
                    description={"설명 테스트"}
                />
                <CommonTile
                    onClick={handleClick}
                    imgSrc={"https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"}
                    title={"제목 테스트"}
                    description={"설명 테스트"}
                />
                <CommonTile
                    onClick={handleClick}
                    imgSrc={"https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"}
                    title={"제목 테스트"}
                    description={"설명 테스트"}
                />
                <CommonTile
                    onClick={handleClick}
                    imgSrc={"https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"}
                    title={"제목 테스트"}
                    description={"설명 테스트"}
                />
                <CommonTile
                    onClick={handleClick}
                    imgSrc={"https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"}
                    title={"제목 테스트"}
                    description={"설명 테스트"}
                />
            </TilesSliderContainer>

        </>
    );
}

export default TileSlider;
