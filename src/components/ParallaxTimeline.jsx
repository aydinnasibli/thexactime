import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../styles/styles.module.css';
import { MdSyncProblem } from 'react-icons/md';
const Page = ({ offset, gradient, onClick }) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
            <div className={styles.slopeBegin} />
        </ParallaxLayer>

        <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
            <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
        </ParallaxLayer>

        <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
            <span>0{offset + 1}</span>
        </ParallaxLayer>

    </>
);

export default function ParallaxTimeline() {
    const parallax = useRef(null);

    const scroll = (to) => {
        if (parallax.current) {
            parallax.current.scrollTo(to);
        }
    };

    return (
        <div className='mt-40 mb-96 lg:mb-72' style={{ background: '#dfdfdf', }}>
            <div className='flex justify-center items-center '>
                <Parallax style={{ overflowX: 'scroll', msOverflowStyle: 'none', zIndex: '-1', width: '70%', height: '30%', scrollbarWidth: 'none', borderRadius: '30px', }} className={styles.container} ref={parallax} pages={60} horizontal>
                    <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
                    <Page offset={1} gradient="pink" onClick={() => scroll(2)} />
                    <Page offset={2} gradient="pink" onClick={() => scroll(3)} />
                    <Page offset={3} gradient="pink" onClick={() => scroll(4)} />
                    <Page offset={4} gradient="teal" onClick={() => scroll(5)} />
                    <Page offset={5} gradient="tomato" onClick={() => scroll(0)} />
                </Parallax>
            </div>
        </div >
    );
}
