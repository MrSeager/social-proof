// anim.tsx
import { useSpring } from '@react-spring/web';

// Animation for top navigation
export const useTopAnim = ( x: number, skewX: number, del: number ) => 
    useSpring({
        from: { opacity: 0, x: `${x}px`, transform: `skewX(${skewX}deg)` },
        to: { opacity: 1, x: '0px', transform: 'skewX(0deg)' },
        config: { tension: 110, friction: 10 },
        delay: del * 100
    });

export const useBottomAnim = ( del: number) =>
    useSpring({
        from: { opacity: 0, scale: 0, transform: 'rotateZ(-400deg)' },
        to: { opacity: 1, scale: 1, transform: 'rotateZ(0deg)' },
        config: { tention: 110, friction: 17 },
        delay: del * 100
    });

export const useHover = ( hover: boolean, scl: number ) => 
    useSpring({
        scale: hover ? scl : 1,
        config: { tension: 110, friction: 10 },
    });