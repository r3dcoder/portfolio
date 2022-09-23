  import React from "react";
import FeatureCard from "../cards/feature-card";
import TopHeadlineCard from "../cards/top-headline-card";
import { demoFeatures } from "../data/fatures";
import { Feature } from "../types/Feature";
 
const FeaturesContainer = () => {
  return (
    <div className="pt-10 md:pt-16 pb-[40px] md:pb-[140px]  px-6 md:px-0 ">
       <TopHeadlineCard title="Why Me?"/>
      <div className="grid grid-cols-1  md:grid-cols-3 pt-10 ">
        {demoFeatures.slice(0, 3)?.map((feature: Feature, index: number) => (
          <FeatureCard key={index} item={feature} />
        ))}
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2  w-full mx-auto md:max-w-[66%] ">
        {demoFeatures.slice(3, 6)?.map((feature: Feature, index: number) => (
          <FeatureCard key={index} item={feature} />
        ))}
      </div>
    </div>
  );
};


export default FeaturesContainer;
