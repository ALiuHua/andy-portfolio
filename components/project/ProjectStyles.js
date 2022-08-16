import styled, { css } from "styled-components";
export const ProjectSection = styled.section`
  /* padding: 5vw 2.5vw; */
  /* padding: 5vw 2.5vw; */
  padding: 1%;
  color: ${({ theme }) => theme.grey};
  /* width: 95%; */
  h1 {
    width: 100%;
    max-width: 85rem;
    margin: 8rem auto 3rem;
    color: ${({ theme }) => theme.title};
    padding: 0 3.5rem;
    @media (max-width: 87.5em) {
      padding: 0 2.5rem;
    }
    //
    font-size: 3.2rem; //????????
    font-weight: 400;
    /* font-size: clamp(2.6rem, 5vw, 3.2rem); //???????? */
  }
`;
export const SectionContent = styled.div`
  width: 100%;
  max-width: 85rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding: 0 3.5rem;
  @media (max-width: 87.5em) {
    padding: 0 2.5rem;
  }
`;

// style for netflex project
export const NetflexSection = styled(ProjectSection)`
  h1 {
    max-width: 114rem;
  }
`;
export const OverViewContent = styled(SectionContent)`
  max-width: 114rem;
`;
export const FeatureContent = styled(OverViewContent)`
  h2 {
    margin-bottom: 2.4rem;
    font-size: 2.8rem; //????????
    color: ${({ theme }) => theme.title};
  }
  :last-child {
    margin-bottom: 8rem;
  }
`;
export const DetailContent = styled.p`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  :last-of-type {
    margin-bottom: 2.5rem;
  }
`;

export const KeywordWrapper = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
`;
export const KeywordList = styled.div`
  flex: 1;
  span {
    display: inline-block;
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
`;
export const ListWrapper = styled.ul`
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
    line-height: 1.6;
    font-weight: 300;
    ::before {
      /* content: ${({ isLink }) => {
        console.log(isLink ? "☞" : "✧");
        return isLink ? "☞" : "✧";
      }}; */
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.arrow};
      font-size: 2rem;
    }
    ${({ isLink }) =>
      isLink
        ? css`
            ::before {
              content: "☞";
            }
          `
        : css`
            ::before {
              content: "✧";
            }
          `};
    /* ${({ isLink }) =>
      !isLink
        ? css`
            ::before {
              content: "✧";
              display: flex;
              align-items: center;
              color: ${({ theme }) => theme.arrow};
              font-size: 2rem;
            }
          `
        : css`
            ::before {
              content: "☞";
              display: flex;
              align-items: center;
              color: red;
              font-size: 2rem;
            }
          `} */

    a:link,
    a:visited {
      position: relative;
      cursor: pointer;
      ::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.line};
        bottom: -2px;
        left: 0;
        transition: width 0.2s linear;
      }
    }
    a:hover,
    a:active {
      ::after {
        width: 100%;
      }
    }
  }
`;
export const GridWrapper = styled.div`
  // gridColnumber  girdGap

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  gap: 3rem;
  justify-content: center;
  align-content: center;
  /* position: relative; */
`;
export const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  align-items: center;
  justify-items: center;
`;
export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
