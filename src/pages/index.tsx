import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled';
import GlobalStyle from '../components/Common/GlobalStyle';
import Introduction from '../components/Main/Introduction';
import Footer from '../components/Common/Footer';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


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

const NextPageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #ffffff;
`


const IndexPage: FunctionComponent = () => {
    return (
        <MainContainer>
            <GlobalStyle />
            <Parallax pages={2}
            >
                <ParallaxLayer
                    offset={0}
                    speed={0.001}
                >
                    <IntroContainer>
                        <Introduction />
                    </IntroContainer>
                </ParallaxLayer>


                <ParallaxLayer
                    offset={1}
                    speed={3}
                >
                    <NextPageWrapper>
                        <Footer />
                    </NextPageWrapper>
                </ParallaxLayer>

            </Parallax>
        </MainContainer>

    );
}

export default IndexPage
