import React from "react";
import "./advertBody.css";
import { motion } from "framer-motion";
export default function AdvertBody() {
  return (
    <div className="advertBody">
      <motion.h1
        initial={{
          x: 0,
          y: 100,
          fontSize: "10px",
          color: "orange",
          width: "300px",
          padding: "10px",
        }}
        animate={{
          x: 10,
          fontSize: "35px",
          color: "white",
          width: "500px",
        }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        Your favourite restaurants and takeaways, delivered to your door. Choose
        Phubie
      </motion.h1>
    </div>
  );
}
