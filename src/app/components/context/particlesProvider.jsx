"use client";
import { createContext, useState } from "react";

export const ParticlesContext = createContext();

const ParticlesProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ParticlesContext.Provider value={{ theme, setTheme }}>
      {children}
    </ParticlesContext.Provider>
  );
};

export default ParticlesProvider;
