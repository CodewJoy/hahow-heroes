"use client";
import { HeroContextProvider } from "@/context/HeroContext";
import HeroList from "@/components/HeroList";
import { useHeroes } from "@/hooks/useHeroes";
import "./layout.css";

interface Props {
  children: React.ReactNode;
}

export default function HeroesLayout({ children }: Props) {
  const { heroes, loading, error, refetch } = useHeroes();

  if (loading)
    return (
      <div className="heroes-layout">
        <section className="hero-list">
          {" "}
          <p>Loading heroes...</p>
        </section>
      </div>
    );

  if (error)
    return (
      <div className="heroes-layout">
        <section className="hero-list">
          <p>Failed to load heroes: {error}</p>
          <button className="app-button" onClick={refetch}>
            Retry
          </button>
        </section>
      </div>
    );

  return (
    <HeroContextProvider>
      <div className="heroes-layout">
        <section className="hero-list">
          <HeroList heroes={heroes} />
        </section>
        <section className="child">{children}</section>
      </div>
    </HeroContextProvider>
  );
}
