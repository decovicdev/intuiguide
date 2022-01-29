import { motion } from 'framer-motion';

const variants = {
  visible: {
    opacity: 1,
    translateY: 0,
  },
  hidden: {
    opacity: 0,
    translateY: 50,
  },
};

interface FadeInProps {
  delay?: number;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay, duration = 1 }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ delay, duration }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
export default FadeIn;
