import { motion } from 'framer-motion';

const DemoAlert = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-5 bg-sky-600 text-center text-sm text-white font-bold"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      You are looking at a demo version of the website.
    </motion.div>
  );
};

export { DemoAlert };
