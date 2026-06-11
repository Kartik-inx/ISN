import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import ObjectivesGrid from "@/components/sections/ObjectivesGrid";
import FoundersGrid from "@/components/sections/FoundersGrid";
import IssuePreview from "@/components/sections/IssuePreview";
import StoriesPreview from "@/components/sections/StoriesPreview";
import VoicesPreview from "@/components/sections/VoicesPreview";
import EventsPreview from "@/components/sections/EventsPreview";
import PocketSergeantBanner from "@/components/sections/PocketSergeantBanner";
import SupportedByPocketSergeant from "@/components/sections/SupportedByPocketSergeant";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ObjectivesGrid />
      <FoundersGrid />
      <IssuePreview />
      <StoriesPreview />
      <VoicesPreview />
      <EventsPreview />
      <CTABanner />
      <SupportedByPocketSergeant />
      <PocketSergeantBanner />
    </>
  );
}
