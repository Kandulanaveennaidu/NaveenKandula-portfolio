import React from 'react';
import CountUp from 'react-countup';
import useInView from '../../hooks/useInView';

const AnimatedCounter = ({ end, duration = 2.5, suffix = '', prefix = '' }) => {
    const [ref, , hasBeenInView] = useInView({ threshold: 0.3 });

    return (
        <span ref={ref}>
            {hasBeenInView ? (
                <CountUp end={end} duration={duration} prefix={prefix} suffix={suffix} />
            ) : (
                `${prefix}0${suffix}`
            )}
        </span>
    );
};

export default AnimatedCounter;
