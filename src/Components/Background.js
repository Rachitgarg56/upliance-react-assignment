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
        <div className="h-full -z-50 w-full absolute left-0 bottom-0 overflow-hidden">
      
            <animated.div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    ...springProps,
                    background: 'linear-gradient(#5FC7F4, #069ADA)',
                }}
            />

        </div>
  );
};

export default Background;
