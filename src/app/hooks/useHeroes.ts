"use client";

import { useState, useEffect } from "react";
import { heroApi } from "@/services/heroApi";
import type { Hero } from "@/types/hero";

interface UseHeroesResult {
  heroes: Hero[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useHeroes(): UseHeroesResult {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHeroes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await heroApi.getHeroes();
      setHeroes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return { heroes, loading, error, refetch: fetchHeroes };
}
