import React from "react";
import { HeroSection } from "./HeroSection/HeroSection";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import NewArrivals from "./NewArrivals/NewArrivals";

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedCategories />
      <NewArrivals />
    </main>
  );
};
