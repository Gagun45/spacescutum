import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const StateWrapper = ({ children }: Props) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 py-12 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      layout
    >
      {children}
    </motion.div>
  );
};

export default StateWrapper;
