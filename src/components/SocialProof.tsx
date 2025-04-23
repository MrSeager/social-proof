import React, { FC } from 'react';
//Components
import './SocialProofStyle.css';
import TopItem from './TopItem.tsx';
import BottomItem from './BottomItem.tsx';
//Bootstrap	
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import ImgOne from '../images/image-colton.jpg';
import ImgTwo from '../images/image-irene.jpg';
import ImgThree from '../images/image-anne.jpg';

const SocialProof: FC = () => {
    return (
        <Container fluid className='min-vh-100 cs-bg d-flex flex-column align-items-center justify-content-center px-5'>
            <Row className='mx-5'>
                <Col lg={5} xs={12} className='pb-3 d-flex flex-column gap-2 align-items-center justify-content-start'>
                    <h1 className='display-3 cs-tc-magenta cs-fw-700 lh-1 text-lg-start text-center'>10,000+ of our users love our products.</h1>
                    <p className='cs-tc-magenta text-lg-start text-center'>We only provide great products combined with excellent customer service.
                    See what our satisfied customers are saying about our services.</p>
                </Col>
                <Col lg={7} xs={12} className='p-0 d-flex flex-column align-items-center justify-content-center gap-3'>
                    <TopItem 
                        par='Rated 5 Stars in Reviews'
                        ms={0}
                        me={5}
                    />
                    <TopItem 
                        par='Rated 5 Stars in Report Guru'
                        ms={3}
                        me={3}
                    />
                    <TopItem 
                        par='Rated 5 Stars in BestTech'
                        ms={5}
                        me={1}
                    />
                </Col>
                <BottomItem 
                    img={ImgOne}
                    name='Colton Smith'
                    status='Verified Buyer'
                    comment='"We needed the same printed design as the one we had ordered a week prior.
                            Not only did they find the original order, but we also received it in time.
                            Excellent!"'
                    pt={0}
                    pb={5}
                />
                <BottomItem 
                    img={ImgTwo}
                    name='Irene Roberts'
                    status='Verified Buyer'
                    comment='"Customer service is always excellent and very quick turn around. Completely
                            delighted with the simplicity of the purchase and the speed of delivery."'
                    pt={4}
                    pb={4}
                />
                <BottomItem 
                    img={ImgThree}
                    name='Anne Wallace'
                    status='Verified Buyer'
                    comment='"Put an order with this company and can only praise them for the very high
                            standard. Will definitely use them again and recommend them to everyone!"'
                    pt={5}
                    pb={0}
                />
            </Row>
        </Container>
    );
}

export default SocialProof;