import React from "react";
import Image from "next/image";
import {
  FeatureContent,
  DetailContent,
  GridWrapper,
  GalleryWrapper,
  CenterWrapper,
} from "../ProjectStyles";

const Feature = ({ feature }) => {
  return (
    <FeatureContent>
      <h2>{feature.featureTitle}</h2>
      {feature.description.length > 0 &&
        feature.description.map((item, index) => (
          <DetailContent key={index}>{item}</DetailContent>
        ))}

      {feature.gridAreaContent.length > 0 && (
        <GridWrapper>
          {feature.gridAreaContent.map((item, index) =>
            item.isImage ? (
              <CenterWrapper key={index}>
                <GalleryWrapper>
                  <Image
                    src={item.detail}
                    alt={item.alt}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  ></Image>
                </GalleryWrapper>
              </CenterWrapper>
            ) : (
              <div key={index}>
                {item.detail.map((ent, index) => (
                  <DetailContent key={index}>{ent}</DetailContent>
                ))}
              </div>
            )
          )}
        </GridWrapper>
      )}
    </FeatureContent>
  );
};

export default Feature;
