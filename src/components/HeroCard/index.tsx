import Link from "next/link";
import { useHeroContext } from "@/context/HeroContext";
import { StyledCard, StyledHeroImage } from "@/components/HeroCard/styles";
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
        <StyledHeroImage src={hero.image} alt={hero.name} />
        <p>{hero.name}</p>
      </StyledCard>
    </Link>
  );
};

export default HeroCard;
