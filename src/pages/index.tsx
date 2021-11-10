import React, { FunctionComponent } from 'react'
import Introduce from '../components/IntroComponents';
import styled from '@emotion/styled';
import GlobalStyle from '../components/Common/GlobalStyle';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`


const Header = styled('div')(() => ({
    backgroundColor: 'black',
    color: 'white',
}))

const Main = styled('div')(() => ({
    backgroundColor: 'black',
    color: 'white',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
}));

const IndexPage: FunctionComponent = () => {
    return (
        <Container>
            <GlobalStyle />
            <Header>portfolio</Header>
            <Main>
                <Introduce name="이하늘" />

            </Main>

        </Container>
    );
}

export default IndexPage