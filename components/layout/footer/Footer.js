import React, { useEffect, useRef } from "react";
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
      {botShown && <ChatBot></ChatBot>}
      {/* {botShown && <ChatBot ref={botRef}></ChatBot>} */}
      {/* function components can not be given ref */}
    </FooterWrapper>
  );
};

export default Footer;
