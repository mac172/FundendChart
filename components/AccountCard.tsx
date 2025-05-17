import { motion } from "framer-motion";

export const AccountCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg shadow-blue-400/10 p-5 w-72 max-w-full text-white"
  >
    <p className="text-sm text-gray-300">Account Balance</p>
    <h2 className="text-2xl font-bold mt-1">$25,340.67</h2>
    <p className="text-green-400 text-sm mt-1">+ $1,200 today</p>
  </motion.div>
);
