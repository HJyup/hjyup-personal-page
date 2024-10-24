import { motion } from 'framer-motion';

const InfoBlockAnimation = ({
  key,
  children,
}: {
  key: string;
  children: React.ReactNode;
}) => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      key={key}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="flex items-center  w-full md:w-1/3 sm:ml-10 pointer-events-auto"
    >
      {children}
    </motion.div>
  );
};

export default InfoBlockAnimation;
