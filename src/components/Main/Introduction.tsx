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
    border: 1px solid red;
    height: 100%;
    flex-direction: column;
    color: white;
`

const Header = styled.header`
    display: grid;
    place-items: center;
    font-size: 20px;
    width: 100%;
    height: 50px;
    border: 1px solid blue;

`
const AttractWordList = styled.div`
    font-size: 70px;
    height: 500px;
    border:1px solid white;
    margin: auto 0;
`


const Introduction: FunctionComponent = function () {
    return (
        <Background>
            <Wrapper>
                <Header>portfolio</Header>
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