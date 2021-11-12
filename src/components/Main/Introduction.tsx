import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import background from "../../../resource/background.png";
import AttractWord from "./AttractWord";

const Background = styled.div`
    flex: 1;
    background-image: url(${background});
    background-repeat: no-repeat;
    backround-size: contain;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    color: white;
`

const Header = styled.header`
    display: grid;
    place-items: center start;
    font-size: 20px;
    font-weight: 900;
    width: 100%;
    height: 50px;
    padding-left: 30px;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`
const AttractWordList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 70px;
    height: 500px;
    margin: auto 0;
    @media (max-width: 856px) {
        font-size: 40px;
    }
    @media (max-width: 528px) {
        font-size: 20px;
    }
    @media (max-width: 310px) {
        font-size: 13px;
    }
`

const StyledHr = styled.hr`
    height: 1px;
    border-width: 1px 0px 0px 0px;
    border-color: #808080;

`


const Introduction: FunctionComponent = function () {
    return (
        <Background>
            <Wrapper>
                <Header>portfolio</Header>
                <StyledHr />
                <AttractWordList>
                    <AttractWord text={'창의적인 아이디어를 위해'} />
                    <AttractWord text={'끊임없이 학습하는'} />
                    <AttractWord text={'이하늘입니다.🐱‍🏍'} />
                </AttractWordList>
            </Wrapper>
        </Background>
    );
}

export default Introduction;