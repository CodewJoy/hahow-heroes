"use client";
import { useParams } from "next/navigation";
import HeroList from "@/app/components/HeroList";
import { useHeroes } from "@/app/hooks/useHeroes";
import "./layout.css";

interface Props {
  children: React.ReactNode;
}

export default function HeroesLayout({ children }: Props) {
  const params = useParams();
  const heroId = params?.heroId as string | undefined;
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
          <button onClick={refetch}>Retry</button>
        </section>
      </div>
    );

  return (
    <div className="heroes-layout">
      <section className="hero-list">
        <HeroList heroes={heroes} selectedHeroId={heroId} />
      </section>
      <section className="child">{children}</section>
    </div>
  );
}
