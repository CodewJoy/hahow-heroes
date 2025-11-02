"use client";
import HeroList from "@/app/components/HeroList";
import { useHeroes } from "@/app/hooks/useHeroes";
import "./layout.css";

export default function HeroesLayout({ children }) {
  const { heroes, loading, error, refetch } = useHeroes();
  console.log("HeroesLayout rendered");
  if (loading)
    return (
      <div className="heroes-container">
        <p>Loading heroes...</p>
      </div>
    );
  if (error)
    return (
      <div className="heroes-container">
        <p>Failed to load heroes: {error}</p>
        <button onClick={refetch}>Retry</button>
      </div>
    );

  return (
    <div className="heroes-container">
      <HeroList heroes={heroes} />
      {children} {/* 這裡的內容會變,但 HeroList 不受影響 */}
    </div>
  );
}
