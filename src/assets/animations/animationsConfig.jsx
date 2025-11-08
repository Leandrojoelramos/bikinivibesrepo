import { createContext, useContext, useEffect, useRef } from "react";
import burnCalories from "./BurnCalories.json";
import loveLineArt from "./LoveLineArt.json";
import summerVibes from "./SummerVibes.json";

const LottieCacheContext = createContext();

export const LottieCacheProvider = ({ children }) => {
  const cacheRef = useRef({});

  useEffect(() => {
    const animations = { burnCalories, loveLineArt, summerVibes };

    for (const [key, data] of Object.entries(animations)) {
      if (!cacheRef.current[key]) {
        cacheRef.current[key] = {
          data,
          instance: null,
        };
      }
    }
  }, []);

  return (
    <LottieCacheContext.Provider value={cacheRef.current}>
      {children}
    </LottieCacheContext.Provider>
  );
};

export const useLottieCache = () => useContext(LottieCacheContext);
