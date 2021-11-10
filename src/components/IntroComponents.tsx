import styled from "@emotion/styled";
import React, { FunctionComponent, useState } from "react";
import { useTrail, a } from 'react-spring';


interface IntroduceProps {
    name: string,
}
const FlexContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 900px;
    align-items:flex-start;
    margin-left: 3vh;
    margin-top: 10vh;
`

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 700, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 60 : 0,
        from: { opacity: 0, x: -90, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div style={{ height, fontSize: '57px' }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}

const Introduce: FunctionComponent<IntroduceProps> = ({ name }) => {
    const [open, set] = useState(true)
    return (
        <div onClick={() => set(state => !state)}>
            <FlexContainer>
                <Trail open={open}>
                    <span>창의적인 아이디어를 위해</span>
                    <span>끊임없이 탐구합니다.</span>
                </Trail>
                <Trail open={open}>
                    <span style={{ fontSize: '48px' }}> {name}입니다🐱‍🏍</span>
                </Trail>
            </FlexContainer>
        </div >
    )
}



export default Introduce;