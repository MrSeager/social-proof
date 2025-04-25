import React, { FC, useState } from 'react';
//Components
import { useHover } from './anim.tsx';
//Bootstrap
import { Container, Image } from 'react-bootstrap';
//Images
import StartImg from '../images/icon-star.svg';
//Spring
import { SpringValue, useSpring, animated } from '@react-spring/web';

interface TopItemProps {
    par: string;
    ms: number;
    me: number;
    anim: {
        opacity: SpringValue<number>;
        x: SpringValue<string>;
        transform: SpringValue<string>;
    }
}

const TopItem: FC<TopItemProps> = ({ par, ms, me, anim }) => {
    const [isHovered, setHovered] = useState<boolean>(false);

    const hoverAnim = useHover(isHovered, 1.1);

    return (
        <animated.div 
            style={{ ...anim, ...hoverAnim}} 
            className={`container ms-lg-${ms} me-lg-${me} mx-0 cs-w-75 py-3 cs-bg-topitem px-4 py-2 rounded rounded-3 d-flex flex-lg-row flex-column align-items-center justify-content-center`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Container className='cs-w-45 d-flex flex-row gap-2 justify-content-center'>
                {[...Array(5)].map((_, index) => (
                    <Image key={index} fluid src={StartImg} alt="star" />
                ))}
            </Container>
            <Container className=''>
                <h2 className='h5 m-0 cs-tc-magenta cs-fw-700 mt-2 text-lg-start text-center'>{par}</h2>
            </Container>
        </animated.div>
    );
}

export default TopItem;