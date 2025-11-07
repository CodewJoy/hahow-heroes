"use client";
import Link from "next/link";
import { useHeroContext } from "@/context/HeroContext";
import { StyledCard } from "@/components/HeroCard/styles";
import Image from "next/image";
import type { Hero } from "@/types/hero";
interface Props {
  hero: Hero;
}

export const HeroCard: React.FC<Props> = ({ hero }) => {
  const { selectedHeroId } = useHeroContext();
  const isSelected = hero.id === selectedHeroId;

  return (
    <Link href={`/heroes/${hero.id}`}>
      <StyledCard $isSelected={isSelected}>
        <Image
          src={hero.image}
          alt={hero.name}
          width={100}
          height={100}
          unoptimized={false}
          loading="eager"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "8px",
          }}
        />
        <p>{hero.name}</p>
      </StyledCard>
    </Link>
  );
};

export default HeroCard;
