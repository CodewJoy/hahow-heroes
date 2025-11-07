"use client";
import { createContext, useContext, ReactNode } from "react";
import { useParams } from "next/navigation";

type HeroContextValue = {
  selectedHeroId?: string;
};

const HeroContext = createContext<HeroContextValue>({});

export const HeroContextProvider = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const heroId = params?.heroId as string | undefined;

  return (
    <HeroContext.Provider value={{ selectedHeroId: heroId }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHeroContext = () => useContext(HeroContext);
