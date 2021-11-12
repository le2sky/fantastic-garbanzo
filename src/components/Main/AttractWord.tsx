import React, { FunctionComponent } from 'react'
import { useTrail, a } from '@react-spring/web'

type AttractWordProps = {
    text: string
}


const AtrractWrapper: FunctionComponent = ({ children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 1000, friction: 300 },
        opacity: 1,
        x: 90,
        from: { opacity: 0, x: 0, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}

const AttractWord: FunctionComponent<AttractWordProps> = function ({ text }) {
    return (
        <AtrractWrapper>
            <span>{text}</span>
        </AtrractWrapper>
    )
}

export default AttractWord;
