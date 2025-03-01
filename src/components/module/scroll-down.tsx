import { motion } from 'framer-motion';

const ScrollDown = () => (
  <motion.div
    className="absolute bottom-24 text-center w-full"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 0.6 }}
  >
    <motion.p
      className="text-sm text-muted-foreground flex items-center justify-center gap-2"
      animate={{ y: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
    >
      scroll down
    </motion.p>
  </motion.div>
);

export default ScrollDown;
