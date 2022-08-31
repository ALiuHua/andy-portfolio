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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {};
  }, []);

  return isLoading ? <MessageLoader /> : children;
};
const Container = styled.div`
  position: relative;
  background-color: #fff6eb;
  padding: 0.8rem 2.4rem;
  border-radius: 2rem;
  border-bottom-left-radius: 2px;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  margin-left: 3rem;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    bottom: 0;
    left: 0;
    transform: translateX(-95%);
    z-index: 1;
    clip-path: polygon(100% 0, 100% 100%, 50% 100%);
    background-color: #fff6eb;
  }
  span {
    width: 0.8rem;
    height: 0.8rem;
    margin: 1rem 0;
    display: inline-block;
    background-color: #ffdfb9;

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
      background-color: #ffdfb9;
    }
    14% {
      transform: translateY(5px);
      background-color: #ffdfb9;
    }
    28% {
      transform: translateY(-5px);
      background-color: #ffc988;
    }
    44% {
      transform: translateY(5px);
      background-color: #feb254;
    }
    60% {
      transform: translateY(0px);
      background-color: #feb254;
    }
  }
`;
