import React from "react";
import styled from "styled-components";
const MessageLoader = () => {
  return (
    <Container>
      <span></span>
    </Container>
  );
};

export default MessageLoader;

const Container = styled.div`
  width: 15rem;
  height: 6rem;
  background-color: orange;
  border-radius: 20px 20px 20px 0px;
  margin-bottom: 3rem;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    position: relative;
    width: 1rem;
    height: 1rem;

    background-color: white;
    display: inline-block;
    border-radius: 50%;
    &::before,
    &::after {
      content: "";
      width: 1rem;
      height: 1rem;
      background-color: white;
      display: inline-block;
      border-radius: 50%;
      position: absolute;
      top: 50%;
    }
    &::before {
      left: 0;
      transform: translate(-25px, -50%);
    }
    &::after {
      right: 0;
      transform: translate(25px, -50%);
    }
  }
`;
