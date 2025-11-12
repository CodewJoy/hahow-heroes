"use client";
import { useState, useMemo } from "react";
import { notFound } from "next/navigation";
import {
  StyledProfile,
  StyledLeftSide,
  StyledRightSide,
  StyledAbility,
  StyledText,
  StyledGrow,
} from "@/components/HeroProfile/styles";
import Button from "@/components/Button";
import { heroApi } from "@/services/heroApi";
import type { AbilityKey, HeroProfile } from "@/types/hero";

interface HeroProfileProps {
  heroId: string;
  initialProfile: HeroProfile;
}

export default function HeroProfile({
  heroId,
  initialProfile,
}: HeroProfileProps) {
  const [profile, setProfile] = useState<HeroProfile>(initialProfile);
  const [originalProfile, setOriginalProfile] =
    useState<HeroProfile>(initialProfile);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveProfile = async () => {
    try {
      setLoading(true);
      await heroApi.updateHeroProfile(heroId, profile);
      setOriginalProfile(profile);
      setError(null);
    } catch (err: any) {
      if (err.response?.status === 404) {
        notFound();
      }
      setError("儲存失敗，請稍後再試。");
    } finally {
      setLoading(false);
    }
  };

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

  if (error) return <p>發生錯誤：{error}</p>;
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
        <Button
          onClick={saveProfile}
          disabled={remainingPoints !== 0 || loading}
        >
          {loading ? "儲存中..." : "儲存變更"}
        </Button>
      </StyledRightSide>
    </StyledProfile>
  );
}
