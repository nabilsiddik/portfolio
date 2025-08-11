'use client';
import { motion } from "framer-motion";

interface SlideInViewProps {
  text?: string;
  classes?: string;
}

const SlideInText = ({ text, classes }: SlideInViewProps) => {
    return (
        <h2 className={classes}>
            {text && text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.03, ease: "easeOut" }}
                    className="inline-block"
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </h2>
    );
};

const SlideInView = ({text, classes}: SlideInViewProps) => {
    return (
        <div>
            <SlideInText text={text && text} classes={classes} />
        </div>
    );
};

export default SlideInView;
