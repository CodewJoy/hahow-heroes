import HeroCard from "@/app/components/HeroCard";
import { StyledHeroList } from "@/app/components/HeroList/styles";
import type { Hero } from "@/types/hero";

interface Props {
  heroes: Hero[];
  selectedHeroId?: string;
}

export const HeroList: React.FC<Props> = ({ heroes, selectedHeroId }) => {
  return (
    <StyledHeroList>
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          isSelected={hero.id === selectedHeroId}
        />
      ))}
    </StyledHeroList>
  );
};

export default HeroList;
