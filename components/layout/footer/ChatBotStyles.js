import styled from "styled-components";

export const RobContainer = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 3.2rem;
  width: 450px;
  border-radius: 6px;
  background-color: #fff;
  font-size: 18px;
  overflow: hidden;
  padding-top: 80px;
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
export const Avatar = styled.img`
  border: 2px solid white;
  display: block;
  margin-right: 2rem;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 100px;
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
    color: #666;
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
  height: 75vh;

  overflow: auto;
`;
export const BotLine = styled.p`
  width: 75%;
  padding: 12px 24px;
  background-color: #fff;
  border-radius: 8px;

  margin: 16px auto 16px 20px;
  border: 1px solid #ddd;
`;
export const QuestionLine = styled(BotLine)`
  margin: 16px 20px 16px auto;
  background-color: black;
  color: white;
`;
export const BotQuestion = styled.p`
  padding: 12px 24px;
  margin: 16px auto 16px 20px;
  background-color: #fff6eb;
  display: inline-block;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #ffebd2;
  }
`;
