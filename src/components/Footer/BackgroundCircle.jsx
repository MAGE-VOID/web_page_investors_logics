import React, { useState, useEffect } from "react";

const BackgroundCircle = () => {
  const [rotation, setRotation] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 1) % 360);
      setColor((prevColor) => (prevColor + 1) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Calculate colors for gradient based on the current color phase
  const colorValue1 = `hsla(${color}, 100%, 70%, 0.4)`;
  const colorValue2 = `hsla(${(color + 180) % 360}, 100%, 50%, 0.4)`; // Complementary color phase

  // Define styles for the circles
  const circleStyle = (rotationOffset, scale) => ({
    position: "absolute",
    bottom: "-40%",
    left: "50%",
    transform: `translateX(-50%) translateY(50%) rotate(${
      rotation + rotationOffset
    }deg) scale(${scale})`,
    width: "500px",
    height: "800px",
    borderRadius: "100%",
    zIndex: "1",
    filter: "blur(100px)",
    background:
      rotationOffset === 0
        ? `radial-gradient(circle at center, ${colorValue1}, rgba(255, 255, 255, 0.0) 70%)`
        : `radial-gradient(circle at center, ${colorValue2}, rgba(255, 255, 255, 0.0) 70%)`,
  });

  return (
    <>
      <div
        style={circleStyle(
          0,
          1.5 - Math.abs(Math.cos((rotation * Math.PI) / 180)) * 0.5
        )}
      ></div>
      <div
        style={circleStyle(
          180,
          1 + Math.abs(Math.cos((rotation * Math.PI) / 180)) * 0.5
        )}
      ></div>
    </>
  );
};

export default BackgroundCircle;
