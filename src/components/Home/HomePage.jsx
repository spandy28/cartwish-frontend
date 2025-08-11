import React from "react";
import HeroSection from "./HeroSection";
import iPhone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 16 Pro"
        subtitle="Experience the power of the latest iPhone 16 with our most Pro camera ever."
        link="/product/68937ef4c7829d1f8aaadbf2"
        image={iPhone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and colour-matched Magic accessories to your bag after you configure your Mac mini."
        link="/product/68937ef4c7829d1f8aaadbfa"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
