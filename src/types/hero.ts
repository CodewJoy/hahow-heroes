// src/types/hero.ts
export interface Hero {
  id: string;
  name: string;
  image: string;
}

export interface HeroProfile {
  str: number; // 力量
  int: number; // 智力
  agi: number; // 敏捷
  luk: number; // 幸運
}

export type AbilityKey = keyof HeroProfile;
