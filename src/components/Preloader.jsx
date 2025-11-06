import React, { useEffect, useState } from "react";
import "../assets/styles/_layout.scss";

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate a loading time of 0.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader" role="status" aria-live="polite" aria-label="Page loading, please wait"></div>
  );
}

export default Preloader;
