import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useSelector } from 'react-redux';

const Background = () => {
    const count = useSelector(state => state.counter.count);
  
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    const maxCount = 100;

    const springProps = useSpring({
        height: `${Math.min((count / maxCount) * 100, 100)}%`,
        config: {
        tension: 170,
        friction: 26,
        easing: t => t * t * (3 - 2 * t)
        },
    });

    return (
        <div className="h-full w-full absolute overflow-hidden">
        <animated.div
            style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            ...springProps,
            background: 'green',
            }}
        />
        </div>
  );
};

export default Background;
