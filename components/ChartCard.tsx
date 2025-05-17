import { motion } from "framer-motion";

export const ChartCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg shadow-blue-400/10 p-5 w-72 max-w-full"
  >
    <p className="text-sm text-gray-300 mb-2">Profit Overview</p>
    <img
      src="/chart.png"
      alt="Chart"
      className="rounded-lg w-full h-32 object-cover"
    />
  </motion.div>
);
