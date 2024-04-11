// window.addEventListener('wheel', function(event) {
//     // event.preventDefault(); // 기본 스크롤 동작 방지

//     const delta = event.deltaY; // 스크롤 방향 및 거리
//     // let scrollSection = document.scrollingElement || document.documentElement;
//     // const scrollContainer = document.querySelector('#scroll-container');
//     const scrollContainer = document.querySelector('.container');
//     // let scrollPosition = scrollSection.scrollTop;
//     let scrollPosition = scrollContainer.scrollTop;
//     let windowHeight = window.innerHeight;    

//     if (delta > 25) { // 아래로 스크롤
//         // 다음 섹션으로 스크롤
//         console.log(`다음 스크롤, delta: ${delta}`);
//         scrollPosition += windowHeight;
//     } else if (delta < -25) { // 위로 스크롤
//         // 이전 섹션으로 스크롤
//         console.log(`이전 스크롤, delta: ${delta}`);
//         scrollPosition -= windowHeight;
//     }

//     // 스크롤 위치 조정
//     window.scrollTo({
//         top: scrollPosition,
//         behavior: 'smooth' // 부드러운 스크롤 효과
//     });
// }, { passive: false }); 

document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        // 여기에 추가 옵션을 넣을 수 있습니다.
    });
});