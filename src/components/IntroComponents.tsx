import styled from "@emotion/styled";
import React, { FunctionComponent, useState } from "react";
import { useTrail, a } from 'react-spring';


interface IntroduceProps {
    name: string,
}


const TarilItemStyles = {
    fontSize: '57px',
    border: '1px solid blue',
}

const TrailContainerStyles = {
}

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
                <a.div key={index} style={style} >
                    <a.div style={{ ...TarilItemStyles, height }}> {items[index]}</a.div>
                </a.div>
            ))
            }
        </div >
    )
}

const Introduce: FunctionComponent<IntroduceProps> = ({ name }) => {
    const [open, set] = useState(true)
    return (
        <div onClick={() => set(state => !state)}>
            <Trail open={open}>
                <span>창의적인 아이디어를 위해</span>
                <span>끊임없이 탐구합니다.</span>
                <span> {name}입니다🐱‍🏍</span>
            </Trail>
        </div >
    )
}



export default Introduce;