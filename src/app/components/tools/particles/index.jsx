"use client";

import { useCallback, useState, useEffect, useContext } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import options from "./particles.json";
import { ParticlesContext } from "../../context/particlesProvider";

const ParticlesBg = ({ color }) => {
  const { theme, setTheme } = useContext(ParticlesContext);
  const [particlesContainer, setParticlesContainer] = useState();

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    setParticlesContainer(container);
  }, []);

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== theme) {
      particlesContainer.loadTheme(theme);
    }
  }, [theme, particlesContainer]);

  return (
    <>
      <Particles
        theme={color}
        id="tsparticles"
        particlesLoaded="particlesLoaded"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </>
  );
};

export default ParticlesBg;
