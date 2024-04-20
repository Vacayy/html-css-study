import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const TrafficButton = styled.button`
    background-color: ${props => props.color};
    padding: 10px 20px;
    margin: 5px;
    border: none;
    outline: ${props => props.isActive ? '3px solid blue' : 'none'};    
`;

/*
tabIndex 속성은 웹 요소가 키보드 탐색 순서에서 어떻게 다뤄질지 결정합니다. tabIndex의 값은 다음과 같은 의미를 가집니다:

tabIndex="0": 요소가 자연적인 문서 흐름에 따라 키보드로 접근 가능합니다.
tabIndex="-1": 요소는 키보드로 직접 접근할 수 없지만, 스크립트를 통해 포커스를 강제로 줄 수 있습니다. 예를 들어, 팝업이나 모달에서 초기 포커스를 설정할 때 사용됩니다.
tabIndex="1" 이상의 값: 이러한 값들은 페이지의 키보드 탐색 순서를 명시적으로 설정합니다. 하지만 이 방법은 사용자의 예상을 벗어나는 탐색 순서를 만들 수 있기 때문에, 일반적으로 권장되지 않습니다.
*/

const TrafficSign = () => {
    const [activeButton, setActiveButton] = useState(null);    

    useEffect(() => {
        console.log(activeButton);
    }, [activeButton]);

    const handleClick = (color) => {
        console.log('clicked', color);
        console.log('clicked: activeButton:', activeButton);
        setActiveButton(color);
    };

    const handleKeyDown = (e) => {
        console.log('keyDown from', activeButton);
        const keys = ['red', 'yellow', 'green'];
        const currentIndex = keys.indexOf(activeButton);

        if (e.key === 'ArrowRight') {
            const nextIndex = (currentIndex + 1) % keys.length;
            setActiveButton(keys[nextIndex]);
        } else if (e.key === 'ArrowLeft') {
            const nextIndex = (currentIndex - 1 + keys.length) % keys.length;
            setActiveButton(keys[nextIndex]);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            switch (activeButton) { 
                case 'red':
                    alert('Waiting');
                    break;
                case 'yellow':
                    alert('Stop');
                    break;
                case 'green':
                    alert('Go ahead');
                    break;
                default:
                    break;
            }
        }        
    }

    return (
        <div>
            <TrafficButton
                color="red"
                isActive={activeButton === 'red'}
                onClick={() => handleClick('red')}
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                Red
            </TrafficButton>
            <TrafficButton
                color="yellow"
                isActive={activeButton === 'yellow'}
                onClick={() => handleClick('yellow')}
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                Yellow
            </TrafficButton>
            <TrafficButton
                color="green"
                isActive={activeButton === 'green'}
                onClick={() => handleClick('green')}
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                Green
            </TrafficButton>
        </div>
    );
}

export default TrafficSign;
