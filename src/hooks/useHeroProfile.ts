"use client";
import { useState, useEffect, useCallback } from "react";
import { heroApi } from "@/services/heroApi";
import type { HeroProfile } from "@/types/hero";

export function useHeroProfile(heroId: string) {
  const [profile, setProfile] = useState<HeroProfile | null>(null);
  const [originalProfile, setOriginalProfile] = useState<HeroProfile | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      const data = await heroApi.getHeroProfile(heroId);
      setProfile(data);
      setOriginalProfile(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch hero");
    } finally {
      setLoading(false);
    }
  }, [heroId]);

  const saveProfile = useCallback(async () => {
    if (!profile) return;
    try {
      await heroApi.updateHeroProfile(heroId, profile);
      setOriginalProfile(profile);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch hero");
    }
  }, [heroId, profile]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return {
    profile,
    originalProfile,
    setProfile,
    loading,
    error,
    fetchProfile,
    saveProfile,
  };
}
