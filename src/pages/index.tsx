import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled';
import GlobalStyle from '../components/Common/GlobalStyle';
import Introduction from '../components/Main/Introduction';


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid green;
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
        </MainContainer>

    );
}

export default IndexPage 
