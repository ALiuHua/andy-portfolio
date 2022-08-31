import React from "react";
import ChatBot from "./ChatBot";
import { useBotContext } from "../../store/bot-context";
import { FooterWrapper, StyledChatBotIcon, Button } from "./FootStyles";
const Footer = () => {
  const { botShown, openBotUI } = useBotContext();
  return (
    <FooterWrapper>
      {!botShown && (
        <Button onClick={openBotUI}>
          <StyledChatBotIcon />
        </Button>
      )}
      {botShown && <ChatBot />}
    </FooterWrapper>
  );
};

export default Footer;
