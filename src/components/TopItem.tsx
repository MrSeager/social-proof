import React, { FC } from 'react';
//Bootstrap
import { Container, Image } from 'react-bootstrap';
//Images
import StartImg from '../images/icon-star.svg';

interface TopItemProps {
    par: string;
    ms: number;
    me: number;
}

const TopItem: FC<TopItemProps> = ({ par, ms, me }) => {
    return (
        <Container className={`ms-lg-${ms} me-lg-${me} cs-w-75 mx-0 cs-bg-topitem px-4 py-2 rounded rounded-3 d-flex flex-lg-row flex-column align-items-center justify-content-center`}>
            <Container className='cs-w-45 d-flex flex-row gap-2 justify-content-center'>
                {[...Array(5)].map((_, index) => (
                    <Image key={index} fluid src={StartImg} alt="star" />
                ))}
            </Container>
            <Container className=''>
                <h2 className='h5 cs-tc-magenta cs-fw-700 mt-2 text-lg-start text-center'>{par}</h2>
            </Container>
        </Container>
    );
}

export default TopItem;