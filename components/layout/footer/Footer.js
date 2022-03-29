import React from "react";
import ChatBot from "./ChatBot";
import { useBotContext } from "../../store/bot-context";
import styled from "styled-components";
const Footer = () => {
  const { botShown, openBotUI } = useBotContext();
  return (
    <FooterWrapper>
      {!botShown && (
        <Button onClick={openBotUI}>
          <StyledChatBotIcon />
        </Button>
      )}
      {botShown && <ChatBot></ChatBot>}
    </FooterWrapper>
  );
};

export default Footer;
export const FooterWrapper = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 8rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ChatBotIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="52"
      height="52"
      viewBox="0 0 52 52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.1245 15H24.875C18.869 15 14 19.6557 14 25.3986C14 31.1419 18.869 36.0251 24.875 36.0251H27.1245C28.5007 36.0251 29.8164 35.5501 31.0277 35.1042L34.7099 36.9196C35.5358 37.229 36.4153 36.6034 36.3434 35.7578L36.1004 31.4793C37.7493 29.6565 38 27.9982 38 25.3986C38 19.6557 33.131 15 27.1245 15ZM34.1036 31.5927C34.0733 31.0585 34.2583 30.5344 34.6172 30.1376C35.7262 28.9116 36 27.9263 36 25.3986C36 20.7808 32.0459 17 27.1245 17H24.875C19.954 17 16 20.7808 16 25.3986C16 30.0739 20.0109 34.0251 24.875 34.0251H27.1245C27.9586 34.0251 28.7311 33.8185 30.3367 33.2274C30.851 33.038 31.4205 33.068 31.9121 33.3104L34.2672 34.4715L34.1036 31.5927ZM34.3467 35.8712L34.3439 35.8218C34.3443 35.8381 34.3452 35.8546 34.3467 35.8712Z"
        fill="#0a192f"
        // fill={`${theme === "light" ? "#fff" : ""}`}
      />
    </svg>
  );
};
export const StyledChatBotIcon = styled(ChatBotIcon)`
  path {
    fill: ${({ theme }) => theme.primary};
  }

  /* fill: ${({ theme }) => theme.primary}; */
`;
const Button = styled.button`
  width: 6rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: none;
  background-color: ${({ theme }) => theme.secondary};
  margin-right: 3.2rem;
  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
  }
`;
