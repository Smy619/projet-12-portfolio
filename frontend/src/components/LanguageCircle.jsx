import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/_languages.scss"


function LanguageCircle({ name, level = 90, color ="#eaf4f1", delay=0 }) {
 const radius = 45;
 const circumference = 2 * Math.PI * radius;
 const offset = circumference - (level /100) * circumference;

  return (
    <motion.figure
      className="language-circle"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      role="group"
      aria-labelledby={`lang-${name.toLowerCase()}-label`}
    >
      <div className="circle-wrapper" role="img" aria-label={`${name}: ${level}% proficiency`}>
      <svg width="100" height="100" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <g transform="rotate(-90 50 50)">  
      
        <circle
          className="circle-bg"
          cx="50"
          cy="50"
          r={radius}
          stroke="#ffffff30"
          strokeWidth="8"
          fill="none"
        />
   
        <motion.circle
          className="circle-progress"
          cx="50"
          cy="50"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, delay, ease: "easeInOut" }}
        />
       </g>
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          fill="#fff"
          fontSize="16"
          fontWeight="600"
        >
          {level}%
        </text>
      </svg>
      </div>
      <figcaption id={`lang-${name.toLowerCase()}-label`} className="language-label">
        {name}
      </figcaption>
   </motion.figure>
  );
}
export default LanguageCircle;