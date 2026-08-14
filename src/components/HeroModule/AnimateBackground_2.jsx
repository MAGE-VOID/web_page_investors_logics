import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const AnimateBackground_2 = () => {
  const mountRef = useRef(null); // Reference to mount point instead of canvas

  useEffect(() => {
    const mount = mountRef.current;
    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;
    let frameId;

    // Parameters
    const SEPARATION = 100,
      AMOUNTX = 50,
      AMOUNTY = 50;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(120, width / height, 1, 1000);
    camera.position.y = 400;
    camera.position.z = 180;
    camera.rotation.x = 0.01;

    // Scene
    const scene = new THREE.Scene();

    // Material
    const material = new THREE.SpriteMaterial({
      color: 0xd8f5ff,
    });

    // Particles
    const particles = [];
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const particle = new THREE.Sprite(material);
        particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION - 10);
        scene.add(particle);
        particles.push(particle);
      }
    }

    let count = 0;
    const animate = () => {
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const particle = particles[i++];
          const phaseX = ix * 0.1; // Unique phase offset for X
          const phaseY = iy * 0.1; // Unique phase offset for Y
          particle.position.y =
            Math.sin((ix + count + phaseX) * 0.3) * 50 +
            Math.sin((iy + count + phaseY) * 0.5) * 50;
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count + phaseX) * 0.3) + 1) * 3 +
            (Math.sin((iy + count + phaseY) * 0.5) + 1) * 3;
        }
      }

      renderer.render(scene, camera);
      count += 0.02; // Slowly increases to animate the waves

      frameId = requestAnimationFrame(animate);
    };

    const onResize = () => {
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        border: "1px solid transparent", // Border for debug
      }}
    ></div>
  );
};

export default AnimateBackground_2;
