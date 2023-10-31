import React, { useState } from "react";
import {
  CategoriesContainer,
  DailyDealsSection,
  DiscountSection,
  FeatureSection,
  HeroSection,
  HomeBlogContainer,
  HomeModal,
  HomeNewsLetterSection,
  HomeProductsDealsSection,
  PartnerSection,
  ProductsContainer,
  SocialMediaSection,
  TestimonialSection,
} from "../components";

const HomePage = () => {
  const [showOfferModal, setShowOfferModal] = useState(true);

  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CategoriesContainer />
      <ProductsContainer
        title="Popular Products"
        routeName="/shop"
        btnName="view all"
      />
      <DailyDealsSection />
      <HomeProductsDealsSection
        title="Hot Deals"
        routeName="/shop"
        btnName="view all"
      />
      <DiscountSection />
      <ProductsContainer
        title="Featured Products"
        routeName="/shop"
        btnName="view all"
      />
      <HomeBlogContainer />
      <TestimonialSection />
      <PartnerSection />
      <SocialMediaSection />
      <HomeNewsLetterSection />
      {showOfferModal && (
        <HomeModal closeModal={() => setShowOfferModal(!showOfferModal)} />
      )}
    </>
  );
};

export default HomePage;
