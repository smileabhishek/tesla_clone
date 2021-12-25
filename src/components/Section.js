import React from "react";
import styled from "styled-components";
function Section({
    title,
    description,
    leftBtnText,
    rightBtnText,
    backgroundImg,
}) {
    return (
        <Wrapper bgImage={backgroundImg}>
            <TextItems>
                <h1>{title}</h1>
                <p>{description}</p>
            </TextItems>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>{leftBtnText}</LeftButton>
                    <RightButton>{rightBtnText}</RightButton>
                </ButtonGroup>
                <DownArrow src="./images/down-arrow.svg" />
            </Buttons>
        </Wrapper>
    );
}

export default Section;
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    /* background: orange; */
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

const TextItems = styled.div`
    padding-top: 15vh;
    text-align: center;
    /* font-weight: 300;
    font-size: 0.8rem; */
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const LeftButton = styled.div`
    background: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`;

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`;
