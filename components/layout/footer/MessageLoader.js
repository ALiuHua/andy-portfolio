import React from "react";
import styled, { keyframes } from "styled-components";
const MessageLoader = () => {
  return (
    <Container>
      <span>
        <span />
      </span>
    </Container>
  );
};

export default MessageLoader;

const Container = styled.div`
  width: 8rem;
  height: 5.2rem;
  background-color: orange;
  border-radius: 20px 20px 20px 0px;
  margin-bottom: 3rem;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    /* span::before {
      animation: loading 1s infinite ease-in-out;
      animation-delay: 300ms;
    } */
    span {
      span {
        animation: loading 1s infinite ease-in-out;
        animation-delay: 350ms;
      }
    }
    span::after {
      animation: loading 1s infinite ease-in-out;
      animation-delay: 500ms;
    }
    span::before {
      animation: loading 1s infinite ease-in-out;
      animation-delay: 200ms;
    }
  }
  span {
    span {
      position: relative;
      width: 0.7rem;
      height: 0.7rem;

      background-color: white;
      display: inline-block;
      border-radius: 50%;
      background-color: #ffdfb9;
    }

    &::before,
    &::after {
      content: "";
      width: 0.7rem;
      height: 0.7rem;
      background-color: white;
      display: inline-block;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #ffdfb9;
    }
    &::before {
      /* transform: translate(-15px, -50%); */
      /* transform: translate(-15px, -50%); */
      margin-left: -15px;
      /* animation: loading 0.5 ease-in-out 0.2; */
    }
    &::after {
      margin-left: 15px;
      /* transform: translate(15px, -50%); */
      /* animation: loading 0.5 ease-in-out 0.4; */
    }
  }

  @keyframes loading {
    0% {
      transform: translateY(0px);
      background-color: #ffdfb9; // rgba(20,105,69,.7);
    }
    28% {
      transform: translateY(-10px);
      background-color: #ffc988; //rgba(20,105,69,.4);
    }
    44% {
      transform: translateY(0px);
      background-color: #feb254; //rgba(20,105,69,.2);
    }
    /* 0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(-10px);
    } */
    /* 100% {
      transform: translateY(0);
    } */
  }
`;
// import * as styled from "./styles";

/*========================================================== */
/*
export default function MessageLoader() {
  return (
    <TypingBubble>
      <div className="typing">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </TypingBubble>
  );
}

export const TypingBubble = styled.div`
  background-color: #fff6eb;
  padding: 1.6rem 2.8rem;
  border-radius: 2rem;
  border-bottom-left-radius: 2px;
  margin-top: 1.2rem;
  width: 30%;

  .typing {
    align-items: center;
    display: flex;
    height: 1.7rem;

    .dot {
      animation: TypingAnimation 1s infinite ease-in-out;
      background-color: #ffdfb9;
      border-radius: 50%;
      height: 0.7rem;
      margin-right: 4px;
      vertical-align: middle;
      width: 0.7rem;
      display: inline-block;

      :nth-child(1) {
        animation-delay: 200ms;
      }

      :nth-child(2) {
        animation-delay: 300ms;
      }

      :nth-child(3) {
        animation-delay: 400ms;
      }

      :last-child {
        margin-right: 0;
      }
    }
  }

  @keyframes TypingAnimation {
    0% {
      transform: translateY(0px);
      background-color: #ffdfb9; // rgba(20,105,69,.7);
    }
    28% {
      transform: translateY(-7px);
      background-color: #ffc988; //rgba(20,105,69,.4);
    }
    44% {
      transform: translateY(0px);
      background-color: #feb254; //rgba(20,105,69,.2);
    }
  }
`;
*/
