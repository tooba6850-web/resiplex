import Hero from "../sections/Hero";
import FeaturedProperties from "../sections/FeaturedProperties";
import PropertyCategories from "../sections/PropertyCategories";
import Locations from "../sections/Locations";
import LatestProperties from "../sections/LatestProperties";
import WhyResiplex from "../sections/WhyResiplex";
import About from "../sections/About";
import InsightsPreview from "../sections/InsightsPreview";
import CTA from "../sections/CTA";

export default function HomePage() {
  return (
    <div className="page">
      <Hero />
      <FeaturedProperties />
      <PropertyCategories />
      <Locations />
      <LatestProperties />
      <WhyResiplex />
      <About />
      <InsightsPreview />
      <CTA />
    </div>
  );
}