import React, { FC } from 'react';
//Bootstrap	
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Image } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

interface BottomItemProps {
    img: string;
    name: string;
    status: string;
    comment: string;
    pt: number; 
    pb: number;
}

const BottomItem: FC<BottomItemProps> = ({ img, name, status, comment, pt, pb }) => {
    return (
        <Col lg={4} xs={12} className={`px-lg-4 px-3 pb-lg-${pb} py-3 pt-lg-${pt}`}>
            <Row className='rounded rounded-3 cs-bg-magenta py-4 h-100'>
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
            </Row>
        </Col>
    );
}

export default BottomItem;