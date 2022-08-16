import React from "react";
import { NetflexSection } from "../ProjectStyles";
import Overview from "./Overview";
import Feature from "./Feature";
import { netflexInfo } from "./netflexInfo";
const NetflexContent = () => {
  return (
    <NetflexSection>
      <h1>{netflexInfo.title}</h1>
      <Overview overview={netflexInfo.overview} />
      {netflexInfo.features.map((feature, index) => (
        <Feature key={index} feature={feature} />
      ))}
    </NetflexSection>
  );
};

export default NetflexContent;
