import { Card, HeroImage } from "./styles";
import type { Hero } from "@/types/hero";

interface Props {
  hero: Hero;
  isSelected: boolean;
}

export const HeroCard: React.FC<Props> = ({ hero, isSelected }) => {
  return (
    <Card $isSelected={isSelected}>
      <HeroImage src={hero.image} alt={hero.name} />
      <p>{hero.name}</p>
    </Card>
  );
};

export default HeroCard;
