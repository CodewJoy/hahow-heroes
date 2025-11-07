import HeroProfile from "@/components/HeroProfile";
// https://nextjs.org/docs/app/guides/upgrading/version-15#asynchronous-page
export default async function HeroProfilePage({
  params,
}: {
  params: Promise<{ heroId: string }>;
}) {
  const { heroId } = await params;
  return <HeroProfile heroId={heroId} />;
}
