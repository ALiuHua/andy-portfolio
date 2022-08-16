import React from "react";
import Image from "next/image";
import {
  OverViewContent,
  DetailContent,
  KeywordWrapper,
  GridWrapper,
  KeywordList,
  ListWrapper,
} from "../ProjectStyles";

const Overview = ({ overview }) => {
  return (
    <OverViewContent>
      {overview.description.map((des, index) => (
        <DetailContent key={index}>{des}</DetailContent>
      ))}
      <KeywordWrapper>
        {overview.keyword.map((item, index) => (
          <KeywordList key={index}>
            <span>{item.listTitle}</span>
            <ListWrapper isLink={item.isLink}>
              {item.isLink
                ? item.listItem.map((list, index) => (
                    <li key={index}>
                      <a href={list.src}>{list.title}</a>
                    </li>
                  ))
                : item.listItem.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
            </ListWrapper>
          </KeywordList>
        ))}
      </KeywordWrapper>
      <GridWrapper>
        <Image src={overview.gallery} width={1266} height={720} />
      </GridWrapper>
    </OverViewContent>
  );
};
export default Overview;
