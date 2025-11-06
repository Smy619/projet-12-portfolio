import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/_skills.scss";

function SkillBar({ level = "90%", color = "var(--accent-color)", delay = 0 }) {
  return (
    <div
      className="progress-bar-wrap"
      role="progressbar"
      aria-valuenow={parseInt(level)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label={`Skill level ${level}`}
    >
      <motion.div
        className="progress-bar"
        initial={{ width: "0%" }}
        whileInView={{ width: level }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 1.2,
          delay,
          ease: "easeInOut",
        }}
        style={{
          background: `linear-gradient(90deg, ${color} 0%, #58b89a 100%)`,
          boxShadow: "0 0 6px rgba(43, 122, 105, 0.4)",
          borderRadius: "8px",
          height: "10px",
        }}
      />
    </div>
  );
}

export default SkillBar;
