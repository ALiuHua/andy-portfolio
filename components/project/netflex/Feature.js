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

//<div>
//   <DetailContent>
//     After 8 months of self-teaching, I decided to build a big and
//     comprehensive project without help from tutorials. The first idea
//     that came into my mind was a Netflix clone. Simply because I watch
//     it every day! I'm very familiar with its UI and UX, as well as all
//     the basic functionalities. Wouldn't it be so cool if I could make my
//     own Netflix?
//   </DetailContent>
//   <DetailContent>
//     So my initial goal was to make a Netflix clone that could offer
//     users the same functionalities like sign up, sign in, create, edit,
//     save, delete the profile, and most importantly, they could watch
//     videos on my website!
//   </DetailContent>
// </div>
