import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import ObjectivesGrid from "@/components/sections/ObjectivesGrid";
import IssuePreview from "@/components/sections/IssuePreview";
import StoriesPreview from "@/components/sections/StoriesPreview";
import VoicesPreview from "@/components/sections/VoicesPreview";
import EventsPreview from "@/components/sections/EventsPreview";
import PocketSergeantBanner from "@/components/sections/PocketSergeantBanner";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ObjectivesGrid />
      <IssuePreview />
      <StoriesPreview />
      <VoicesPreview />
      <EventsPreview />
      <PocketSergeantBanner />
      <CTABanner />
    </>
  );
}
