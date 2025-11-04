import HeroCard from "@/app/components/HeroCard";
import { StyledHeroList } from "@/app/components/HeroList/styles";
import type { Hero } from "@/types/hero";

interface Props {
  heroes: Hero[];
}

export const HeroList: React.FC<Props> = ({ heroes }) => {
  return (
    <StyledHeroList>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </StyledHeroList>
  );
};

export default HeroList;
