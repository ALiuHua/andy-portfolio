import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  padding: 2.5rem 2.5rem;
  /* @media (max-width: 87.5em) {
    padding: 2.5rem 2.5rem;
  } */
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ProjectCardHeader = styled.h2`
  font-size: 2.8rem;
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 2rem;
`;
export const ProjectCardDescription = styled.p`
  padding: 1.5rem 1.5rem;
  font-size: 1.6rem;
  background-color: rgba(235, 235, 235);
  margin-bottom: 2.5rem;
`;
export const ProjectCardTag = styled.div`
  background-color: rgba(55, 55, 55, 0.8);
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
