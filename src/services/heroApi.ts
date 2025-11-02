import { apiClient } from "@/services/index";
import type { Hero, HeroProfile } from "@/types/hero";

export const heroApi = {
  getHeroes: async (): Promise<Hero[]> => {
    const { data } = await apiClient.get("/heroes");
    return data;
  },

  getHeroProfile: async (heroId: string): Promise<HeroProfile> => {
    const { data } = await apiClient.get(`/heroes/${heroId}/profile`);
    return data;
  },

  updateHeroProfile: async (
    heroId: string,
    profile: HeroProfile
  ): Promise<HeroProfile> => {
    const { data } = await apiClient.patch(
      `/heroes/${heroId}/profile`,
      profile
    );
    return data;
  },
};
