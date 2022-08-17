import styled from "styled-components";
import { flattenDiagnosticMessageText } from "typescript";

export const RobContainer = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 3.2rem;
  width: 450px;
  border-radius: 0.6rem;
  background-color: #fff;
  font-size: 1.8rem;
  overflow: hidden;
  padding-top: 80px;
  @media only screen and (max-width: 72.5em) {
    bottom: 3rem;
    right: 1.8rem;
    width: 415px;
  }
  @media only screen and (max-width: 28em) {
    bottom: 0rem;
    right: 0rem;
    width: 100%;
    top: 0rem;
    border-radius: 0rem;
  }
`;
export const HeadContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  padding: 0 2.4rem;
  height: 80px;
  background-color: black;
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Avatar = styled.div`
  /* border: 2px solid #ddd; */
  display: block;
  margin-right: 2rem;
  width: 5rem;
  height: 5rem;
  border-radius: 100px;
  position: relative;
  overflow: hidden;
`;
export const RobDescription = styled.div`
  margin-right: auto;
  span {
    display: block;
  }
  span:nth-child(1) {
    color: white;
    font-weight: 700;
    font-size: 1.8rem;
  }
  span:nth-child(2) {
    color: #ddd;
    font-weight: 400;
    font-size: 1.4rem;
  }
`;
export const CloseIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    display: block;
    width: 2rem;
    height: 2px;
    background-color: white;
    transform: rotate(-45deg);
    &::after {
      content: "";
      display: block;
      width: 2rem;
      height: 2px;
      background-color: white;
      transform: rotate(90deg);
    }
  }
`;

// we must give a fixed height/width to make a container overflow take into effect
//like in this cast to make scrool bar visiable.
export const ChatContainer = styled.div`
  height: 60vh;
  font-size: 1.6rem;
  overflow: auto;
  @media only screen and (max-width: 28em) {
    height: calc(100vh - 80px);
  }
`;
export const BotLine = styled.div`
  width: 80%;
  padding: 1rem 2rem;
  background-color: #fff;
  border-radius: 0.8rem;

  margin: 1.6rem auto 1.6rem 2rem;
  border: 1px solid #ddd;
  a:link,
  a:visited {
    border-radius: 5px;
    display: inline-block;
    padding: 2px 8px;
  }
  a:hover,
  a:active {
    /* color: #254bde; */
    background-color: #ffebd2;
  }
  p {
    span {
      display: block;
    }
  }
  p:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;
export const QuestionLine = styled(BotLine)`
  margin: 1.6rem 2rem 1.6rem auto;
  background-color: black;
  color: white;
`;
export const BotQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BotQuestion = styled.div`
  padding: 1rem 2rem;
  margin: 1.6rem auto 1.6rem 2.4rem;
  background-color: #fff6eb;
  display: inline-block;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #ffebd2;
  }
`;
