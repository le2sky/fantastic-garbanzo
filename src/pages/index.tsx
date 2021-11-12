import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled';
import GlobalStyle from '../components/Common/GlobalStyle';
import Introduction from '../components/Main/Introduction';
import Footer from '../components/Common/Footer';

//1112
// 스크롤 부드럽게


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: black;
`


const IndexPage: FunctionComponent = () => {
    return (
        <MainContainer>
            <GlobalStyle />
            <IntroContainer>
                <Introduction />
            </IntroContainer>
            <div>nextPage</div>
            <Footer />
        </MainContainer>

    );
}

export default IndexPage