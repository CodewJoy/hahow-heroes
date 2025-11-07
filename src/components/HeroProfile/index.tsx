"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  StyledProfile,
  StyledLeftSide,
  StyledRightSide,
  StyledAbility,
  StyledText,
  StyledGrow,
} from "@/components/HeroProfile/styles";
import { useHeroProfile } from "@/hooks/useHeroProfile";
import Button from "@/components/Button";
import type { AbilityKey } from "@/types/hero";

export default function HeroProfile() {
  const pathname = usePathname();
  const heroId = pathname.split("/")[2];
  const { profile, originalProfile, setProfile, loading, error, saveProfile } =
    useHeroProfile(heroId);

  const remainingPoints = useMemo(() => {
    if (!profile || !originalProfile) return 0;
    const current = Object.values(profile).reduce((a, b) => a + b, 0);
    const base = Object.values(originalProfile).reduce((a, b) => a + b, 0);
    return base - current;
  }, [profile, originalProfile]);

  const handleAbilityChange = (key: AbilityKey, delta: number) => {
    setProfile((prev) => {
      if (!prev) return prev;
      const next = prev[key] + delta;
      if (next < 0 || (delta > 0 && remainingPoints === 0)) return prev;
      return { ...prev, [key]: next };
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!profile) return null;

  return (
    <StyledProfile>
      <StyledLeftSide>
        {Object.entries(profile).map(([key, value]) => (
          <StyledAbility key={key}>
            <StyledText>{key}</StyledText>
            <Button
              onClick={() => handleAbilityChange(key as AbilityKey, 1)}
              disabled={remainingPoints === 0} // Hero 能力值已滿
            >
              +
            </Button>
            <StyledText>{value}</StyledText>
            <Button
              onClick={() => handleAbilityChange(key as AbilityKey, -1)}
              disabled={value === 0} // Hero 能力值不能小於零
            >
              -
            </Button>
          </StyledAbility>
        ))}
      </StyledLeftSide>
      <StyledRightSide>
        <StyledGrow />
        <span>剩餘點數: {remainingPoints}</span>
        <Button onClick={saveProfile} disabled={remainingPoints !== 0}>
          儲存
        </Button>
      </StyledRightSide>
    </StyledProfile>
  );
}
