import { useLocation, Link} from "react-router-dom";
import { motion } from "motion/react"
export default function NotFound() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full  text-text-light px-4 py-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold text-primary mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-2xl font-semibold mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          The route <span className="font-mono text-primary">"{currentPath}"</span> does not exist.
        </motion.p>
        <motion.a
          href="/"
          className="inline-block bg-primary text-background py-2 px-4 rounded-lg"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Return to Home
        </motion.a>
      </div>
    </motion.div>
  );
}