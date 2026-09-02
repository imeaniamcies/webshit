"use client";

import { motion } from 'framer-motion';

interface AnimationContainerProps {
    children: React.ReactNode;
    delay?: number;
    reverse?: boolean;
    className?: string;
};

const AnimationContainer = ({ children, className, reverse, delay }: AnimationContainerProps) => {
    // No scroll-linked animation: content animates once when it first mounts,
    // so nothing pops in/out as the page is scrolled.
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: reverse ? -12 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
};

export default AnimationContainer