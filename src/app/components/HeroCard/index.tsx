import Link from "next/link";
import { StyledCard, StyledHeroImage } from "@/app/components/HeroCard/styles";
import type { Hero } from "@/types/hero";

interface Props {
  hero: Hero;
  isSelected: boolean;
}

export const HeroCard: React.FC<Props> = ({ hero, isSelected }) => {
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
