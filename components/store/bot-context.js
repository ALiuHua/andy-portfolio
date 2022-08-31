import React, { useState, useContext, useRef } from "react";

export const BotContext = React.createContext({
  botShown: false,
  openBotUI: () => {},
  closeBotUI: () => {},
  tbotRef: null,
});

const BotContextProvider = ({ children }) => {
  const [botShown, setBotShown] = useState(false);
  const tbotRef = useRef();
  // to attached to nav contact button to control click out side and toggle close/open chatbot
  const openBotUI = () => {
    setBotShown(true);
  };
  const closeBotUI = () => {
    setBotShown(false);
  };

  return (
    <BotContext.Provider value={{ botShown, openBotUI, closeBotUI, tbotRef }}>
      {children}
    </BotContext.Provider>
  );
};
export default BotContextProvider;

export const useBotContext = () => {
  const { botShown, openBotUI, closeBotUI, tbotRef } = useContext(BotContext);
  return { botShown, openBotUI, closeBotUI, tbotRef };
};
