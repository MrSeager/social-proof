import React, { FC } from 'react';
//Components
import './SocialProofStyle.css';
import TopItem from './TopItem.tsx';
import BottomItem from './BottomItem.tsx';
import { useTopAnim, useBottomAnim } from './anim.tsx';
//Bootstrap	
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
//Spring
import { animated } from '@react-spring/web';
//Images
import ImgOne from '../images/image-colton.jpg';
import ImgTwo from '../images/image-irene.jpg';
import ImgThree from '../images/image-anne.jpg';

const SocialProof: FC = () => {
    const animLeftH1 = useTopAnim(-200, -50, 0);
    const animLeftP = useTopAnim(-200, -50, 1);

    const animRightOne = useTopAnim(200, 50, 0);
    const animRightTwo = useTopAnim(200, 50, 1);
    const animRightThree = useTopAnim(200, 50, 2);

    const animBottomOne = useBottomAnim(3);
    const animBottomTwo = useBottomAnim(4);
    const animBottomThree = useBottomAnim(5);

    return (
        <Container fluid className='overflow-hidden min-vh-100 cs-bg d-flex flex-column align-items-center justify-content-center px-5'>
            <Row className='mx-lg-5 mx-0'>
                <Col lg={5} xs={12} className='py-5 d-flex flex-column gap-2 align-items-center justify-content-start'>
                    <animated.h1 style={animLeftH1} className='display-3 cs-tc-magenta cs-fw-700 lh-1 text-lg-start text-center'>10,000+ of our users love our products.</animated.h1>
                    <animated.p style={animLeftP} className='m-0 cs-tc-magenta text-lg-start text-center'>We only provide great products combined with excellent customer service.
                    See what our satisfied customers are saying about our services.</animated.p>
                </Col>
                <Col lg={7} xs={12} className='p-0 d-flex flex-column align-items-center justify-content-center gap-3'>
                    <TopItem 
                        par='Rated 5 Stars in Reviews'
                        ms={0}
                        me={5}
                        anim={animRightOne}
                    />
                    <TopItem 
                        par='Rated 5 Stars in Report Guru'
                        ms={3}
                        me={3}
                        anim={animRightTwo}
                    />
                    <TopItem 
                        par='Rated 5 Stars in BestTech'
                        ms={5}
                        me={1}
                        anim={animRightThree}
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
                    anim={animBottomOne}
                />
                <BottomItem 
                    img={ImgTwo}
                    name='Irene Roberts'
                    status='Verified Buyer'
                    comment='"Customer service is always excellent and very quick turn around. Completely
                            delighted with the simplicity of the purchase and the speed of delivery."'
                    pt={4}
                    pb={4}
                    anim={animBottomTwo}
                />
                <BottomItem 
                    img={ImgThree}
                    name='Anne Wallace'
                    status='Verified Buyer'
                    comment='"Put an order with this company and can only praise them for the very high
                            standard. Will definitely use them again and recommend them to everyone!"'
                    pt={5}
                    pb={0}
                    anim={animBottomThree}
                />
            </Row>
        </Container>
    );
}

export default SocialProof;