// GSAP 라이브러리의 ScrollTrigger 플러그인을 등록합니다.
gsap.registerPlugin(ScrollTrigger);

// .container 클래스를 가진 DOM 요소를 선택합니다. 이 요소는 스크롤 관련 변화가 적용될 메인 컨테이너입니다.
const pageContainer = document.querySelector(".container");

// Locomotive Scroll을 초기화하고, 부드러운 스크롤 기능을 활성화합니다.
const scroller = new LocomotiveScroll({
    el: pageContainer, // 스크롤이 적용될 요소를 지정합니다.
    //   smooth: true // 부드러운 스크롤 기능을 활성화합니다.
});

// Locomotive Scroll의 스크롤 이벤트에 ScrollTrigger의 update 메소드를 연결합니다.
// 이는 Locomotive Scroll이 스크롤 상태를 변경할 때마다 ScrollTrigger가 이를 인식하고 반응할 수 있도록 합니다.
scroller.on("scroll", ScrollTrigger.update);


// ScrollTrigger를 사용하여 Locomotive Scroll과의 스크롤 동기화를 설정합니다.
ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
        // 스크롤 위치를 설정하거나 반환합니다.
        return arguments.length
            ? scroller.scrollTo(value, 0, 0) // 값이 제공된 경우, 해당 위치로 스크롤합니다.
            : scroller.scroll.instance.scroll.y; // 값이 제공되지 않은 경우, 현재 스크롤 위치를 반환합니다.
    },
    getBoundingClientRect() {
        // 컨테이너의 뷰포트 내 위치와 크기를 반환합니다.
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed" // 고정 스타일을 결정합니다.
});

// 페이지가 로드될 때 실행되는 함수입니다.
window.addEventListener("load", function () {
    // 가로 스크롤이 적용될 요소들을 선택합니다.
    let pinBoxes = document.querySelectorAll(".pin-wrap > *");
    let pinWrap = document.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth; // 가로 스크롤의 길이를 계산합니다.

    // Pinning and horizontal scrolling
    // 가로 스크롤 애니메이션을 정의합니다.
    gsap.to(".pin-wrap", {
        scrollTrigger: {
            scroller: pageContainer, // Locomotive Scroll을 사용하는 컨테이너를 지정합니다.
            scrub: true, // 스크롤 동작에 따라 애니메이션을 부드럽게 조정합니다.
            trigger: "#sectionPin", // 애니메이션이 시작되는 트리거 요소를 지정합니다.
            pin: true, // 애니메이션 동작 중 요소를 고정합니다.
            //   anticipatePin: 1, 
            start: "top top", // 애니메이션 시작 조건을 지정합니다.
            end: pinWrapWidth, // 애니메이션 종료 조건을 지정합니다.
        },
        x: -horizontalScrollLength, // 가로 방향으로 이동할 거리를 지정합니다.
        ease: "none" // 애니메이션 속도 곡선을 지정합니다.
    });


    // ScrollTrigger의 상태를 갱신합니다.
    ScrollTrigger.addEventListener("refresh", () => scroller.update()); // locomotive scroll
    ScrollTrigger.refresh();
});