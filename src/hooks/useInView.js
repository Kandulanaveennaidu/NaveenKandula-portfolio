import { useState, useEffect, useRef, useMemo } from 'react';

const useInView = (options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const [hasBeenInView, setHasBeenInView] = useState(false);
    const ref = useRef(null);

    const observerOptions = useMemo(() => ({
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
    }), [options.threshold, options.rootMargin]);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    setHasBeenInView(true);
                } else {
                    setIsInView(false);
                }
            },
            observerOptions
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [observerOptions]);

    return [ref, isInView, hasBeenInView];
};

export default useInView;
