import Hero from "./components/Hero";
import LatestStories from "./components/LatestStories";
import ShopPreview from "./components/ShopPreview";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <LatestStories />
      <ShopPreview />
      <Newsletter />
    </main>
  );
}