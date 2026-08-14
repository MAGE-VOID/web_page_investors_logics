import React, { useEffect, useRef } from "react";

const AnimateBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const parts = [];
    const waves = [];

    function randFrom(min, max) {
      return Math.random() * (max - min) + min;
    }

    function randBet(c1, c2) {
      const nArr = [c1, c2];
      return nArr[Math.floor(Math.random() * 2)];
    }

    class Wave {
      constructor(period, amp, waveL, dir) {
        this.phase = 0;
        this.dirVal = dir === "left" ? 1 : -1;

        this.applyTo = function (points) {
          for (let i = 0; i < points.length; i++) {
            const initPhase = (2 * Math.PI * points[i].x) / waveL;
            const yVal = amp * Math.sin(this.phase + initPhase * this.dirVal);
            points[i].y += yVal;
            const angVel = (2 * Math.PI) / period;
            points[i].acc += -(angVel ** 2) * yVal;
          }
          this.phase += (2 * Math.PI) / period;
        };
      }
    }

    class Particle {
      constructor(x) {
        this.x = x;
        this.y = 0;
        this.acc = 0;
        this.size = 20; // Adjusted size for visual clarity
      }

      upd() {
        const bodyHeight = this.size;
        const bodyWidth = this.size / 2;
        const yPosition = canvas.height / 2 + this.y - bodyHeight / 2;
        const color = this.acc < 0 ? 'red' : 'green'; // Color based on acceleration

        ctx.fillStyle = color;
        ctx.fillRect(this.x - bodyWidth / 2, yPosition, bodyWidth, bodyHeight);

        // Draw the wick
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(this.x, yPosition);
        ctx.lineTo(this.x, yPosition - this.size); // Wick above
        ctx.moveTo(this.x, yPosition + bodyHeight);
        ctx.lineTo(this.x, yPosition + bodyHeight + this.size); // Wick below
        ctx.stroke();

        this.y = 0;
        this.acc = 0;
      }
    }

    function gameMake() {
      const num = 150;
      for (let i = 0; i < num; i++) {
        parts.push(new Particle((i / (num - 1)) * canvas.width));
      }
      const waveNum = 4;
      for (let i = 0; i < waveNum; i++) {
        waves.push(
          new Wave(
            randFrom(300, 500), // Slower waves for more distinct movement
            canvas.height / (4 * waveNum),
            randFrom(100, canvas.width / 2),
            randBet("left", "right")
          )
        );
      }
    }

    function gameMove() {
      requestAnimationFrame(gameMove);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const wave of waves) {
        wave.applyTo(parts);
      }
      for (const part of parts) {
        part.upd();
      }
    }

    gameMake();
    gameMove();

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
};

export default AnimateBackground;
