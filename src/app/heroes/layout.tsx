import { notFound } from "next/navigation";
import { HeroContextProvider } from "@/context/HeroContext";
import HeroList from "@/components/HeroList";
import { heroApi } from "@/services/heroApi";
import "./layout.css";

interface Props {
  children: React.ReactNode;
}

export default async function HeroesLayout({ children }: Props) {
  let heroes;

  try {
    heroes = await heroApi.getHeroes();
  } catch (err: any) {
    if (err.response?.status === 404) {
      notFound();
    }
    throw err;
  }

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
