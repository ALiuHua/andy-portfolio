import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  padding: 2.5rem 2.5rem;
  position: relative;
  border-radius: 1vw;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.grey};
  margin-bottom: 3rem;
`;
export const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  img {
    z-index: -2;
    display: block;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.3); */
    background-color: ${({ theme }) => theme.primary};
    opacity: 0.85;
    z-index: -1;
  }
`;
export const ProjectCardHeader = styled.h2`
  font-size: 2.8rem;
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 2rem;
`;
export const ProjectCardDescription = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
`;
export const ProjectCardTag = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: flex-end;
  span {
    font-size: 1.4rem;
    :not(:last-child) {
      margin-right: 2rem;
    }
  }
`;
export const LinkBar = styled(ProjectCardTag)`
  margin-bottom: 0;
  gap: 1rem;
  span {
    width: 2.5rem !important;
    height: 2.5rem !important;
  }
`;
