import HeroProfile from "@/components/HeroProfile";
import { heroApi } from "@/services/heroApi";
import { notFound } from "next/navigation";

interface HeroProfilePageProps {
  params: Promise<{ heroId: string }>;
}

export default async function HeroProfilePage({
  params,
}: HeroProfilePageProps) {
  // https://nextjs.org/docs/app/guides/upgrading/version-15#asynchronous-page
  const { heroId } = await params;

  try {
    const profile = await heroApi.getHeroProfile(heroId);

    if (!profile) {
      notFound();
    }

    return <HeroProfile heroId={heroId} initialProfile={profile} />;
  } catch (err: any) {
    if (err.response?.status === 404) {
      notFound();
    }
    throw new Error("Unable to load hero profile. Please try again later.");
  }
}
