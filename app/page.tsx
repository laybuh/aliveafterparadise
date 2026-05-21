import Hero from "./components/Hero";
import LatestStories from "./components/LatestStories";
import ShopPreview from "./components/ShopPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <LatestStories />
      <ShopPreview />
    </main>
  );
}