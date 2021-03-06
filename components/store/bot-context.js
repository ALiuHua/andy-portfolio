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
  const openBotUI = () => {
    setBotShown(true);
    console.log("clicked open");
  };
  const closeBotUI = () => {
    setBotShown(false);
    console.log("clicked close");
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
