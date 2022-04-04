import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MessageLoader = () => {
  return (
    <Container>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
};

export default MessageLoader;
export const TimeDelay = ({ children }) => {
  // const [indx, setIndx] = useState(index);
  // const [newr, setNewr] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    console.log("ruing 2");
    setTimeout(() => {
      setIsLoading(false);

      console.log("ruing 3");
    }, 2000);

    return () => {};
  }, []);

  return isLoading ? <MessageLoader /> : children;
};
const Container = styled.div`
  background-color: #fff6eb;
  padding: 1.2rem 2.4rem;
  border-radius: 2rem;
  border-bottom-left-radius: 2px;
  margin-top: 1.6rem;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* if you set width and height which are not work; maybe you need to set element as inline-block */
  span {
    /* padding: 0;
    margin: 0; */
    width: 0.8rem;
    height: 0.8rem;
    margin: 1rem 0;
    display: inline-block;
    background-color: #ffdfb9;
    /* line-height: 1; */
    &:not(:last-child) {
      margin-right: 1rem;
    }
    border-radius: 50%;
    animation: loading 1.4s infinite ease-in-out;

    &:nth-child(1) {
      animation-delay: 200ms;
    }
    &:nth-child(2) {
      animation-delay: 300ms;
    }
    &:nth-child(3) {
      animation-delay: 400ms;
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
  }
`;
