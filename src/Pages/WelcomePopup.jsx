import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isVisited = localStorage.getItem("visited");
    if (!isVisited) {
      setShowPopup(true);
      localStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-60 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white p-6 rounded-lg w-[600px] text-center space-y-3"
          >
            <h2 className="text-2xl font-bold">🎉 Welcome to Our Shop!</h2>
            <p>Get 10% off on your first purchase!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WelcomePopup;
