import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

const TypewriterComp = () => {
  const [currentHeading, setCurrentHeading] = useState(0);
  const [isHeadingDone, setIsHeadingDone] = useState(false);

  // Function to switch to the next heading
  const switchHeading = () => {
    setCurrentHeading((prev) => (prev + 1) % 2);
    setIsHeadingDone(false);
  };

  useEffect(() => {
    if (isHeadingDone) {
      const timer = setTimeout(switchHeading, 1000); // Wait for 1 second before switching
      return () => clearTimeout(timer);
    }
  }, [isHeadingDone]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <AnimatePresence mode="wait">
        {currentHeading === 0 ? (
          <motion.div
            key="heading1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-2xl font-semibold text-black"
          >
            Want to score top grades in your{" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span style='color: #34ACD4;'>Exams</span> <span style='color: #383838;'>?</span>`
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .start()
                  .typeString(
                    `<span style='color: #34ACD4;'>Assessments</span> <span style='color: #383838;'>?</span>`
                  )
                  .pauseFor(1000)
                  .callFunction(() => {
                    setIsHeadingDone(true); // Set heading done to true when done typing
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                deleteSpeed: 20,
                delay: 50,
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="heading2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-2xl font-semibold text-black"
          >
            Strive for outstanding success in your{" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span style='color: #34ACD4;'>Studies</span> <span style='color: #383838;'>?</span>`
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .start()
                  .typeString(
                    `<span style='color: #34ACD4;'>Career</span> <span style='color: #383838;'>?</span>`
                  )
                  .pauseFor(1000)
                  .callFunction(() => {
                    setIsHeadingDone(true); // Set heading done to true when done typing
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                deleteSpeed: 20,
                delay: 50,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TypewriterComp;
