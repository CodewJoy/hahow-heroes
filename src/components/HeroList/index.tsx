import HeroCard from "@/components/HeroCard";
import { StyledHeroList } from "@/components/HeroList/styles";
import type { Hero } from "@/types/hero";

interface Props {
  heroes: Hero[];
}

export const HeroList: React.FC<Props> = ({ heroes }) => {
  // test re-render
  // console.log("heroes", heroes);
  return (
    <StyledHeroList>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </StyledHeroList>
  );
};

export default HeroList;
