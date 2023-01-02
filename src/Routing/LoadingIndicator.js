import { motion } from "framer-motion";

const LoadingIndicator = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1 }}
  >
    Loading...
  </motion.div>
);

export default LoadingIndicator;
