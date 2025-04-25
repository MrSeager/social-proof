import React, { FC, useState } from 'react';
//Components
import { useHover } from './anim.tsx';
//Bootstrap	
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Image } from 'react-bootstrap';
//Spring
import { SpringValue, animated } from '@react-spring/web';

interface BottomItemProps {
    img: string;
    name: string;
    status: string;
    comment: string;
    pt: number; 
    pb: number;
    anim: {
        opacity: SpringValue<number>;
        scale: SpringValue<number>;
        transform: SpringValue<string>;
    }
}

const BottomItem: FC<BottomItemProps> = ({ img, name, status, comment, pt, pb, anim }) => {
    const [isHovered, setHovered] = useState<boolean>(false);
    
    const hoveredAnim = useHover(isHovered, 1.05);

    return (
        <Col lg={4} xs={12} className={`px-4 pb-lg-${pb} py-3 pt-lg-${pt}`}>
            <animated.div 
                style={{ ...anim, ...hoveredAnim }}
                className='row rounded rounded-3 cs-bg-magenta py-4 h-100'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Col xs={3} className='ps-4 d-flex flex-column justify-content-center'>
                    <Image roundedCircle fluid src={img} />
                </Col>
                <Col xs={9} className='d-flex flex-column align-items-start justify-content-center'>
                    <h3 className='m-0 h4 text-white'>{name}</h3>
                    <h4 className='h5 cs-tc-pink m-0'>{status}</h4>
                </Col>
                <Col xs={12}>
                    <p className='text-white mx-3 mt-3'>{comment}</p>
                </Col>
            </animated.div>
        </Col>
    );
}

export default BottomItem;