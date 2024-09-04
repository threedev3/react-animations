import { motion } from "framer-motion";
import { useState } from "react";

export default function FlipCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="App flex justify-center items-center h-screen">
      <motion.div
        className="relative w-80 h-40"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-blue-500 flex justify-center items-center text-white text-xl rounded-lg"
          animate={{ rotateY: hovered ? 180 : 0 }}
          transition={{ duration: 0.7 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          Front Side
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-red-500 flex justify-center items-center text-white text-xl rounded-lg"
          initial={{ rotateY: 180 }}
          animate={{ rotateY: hovered ? 0 : 180 }}
          transition={{ duration: 0.7 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          Back Side
        </motion.div>
      </motion.div>
    </div>
  );
}
