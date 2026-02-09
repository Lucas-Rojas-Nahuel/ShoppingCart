import FeaturedCategories from "../components/home/FeaturedCategories/FeaturedCategories";
import { HeroSection } from "../components/home/HeroSection/HeroSection";
import NewArrivals from "../components/home/NewArrivals/NewArrivals";

export const Home = ({ setCategory, products }) => {
  return (
    <>
      <HeroSection />
      <FeaturedCategories setCategory={setCategory} />
      <NewArrivals products={products} />
    </>
  );
};
