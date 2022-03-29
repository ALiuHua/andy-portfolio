import React, { useState, useContext } from "react";

export const BotContext = React.createContext({
  botShown: false,
  openBotUI: () => {},
  closeBotUI: () => {},
});

const BotContextProvider = ({ children }) => {
  const [botShown, setBotShown] = useState(false);
  const openBotUI = () => {
    setBotShown(true);
    console.log("clicked open");
  };
  const closeBotUI = () => {
    setBotShown(false);
    console.log("clicked close");
  };

  return (
    <BotContext.Provider value={{ botShown, openBotUI, closeBotUI }}>
      {children}
    </BotContext.Provider>
  );
};
export default BotContextProvider;

export const useBotContext = () => {
  const { botShown, openBotUI, closeBotUI } = useContext(BotContext);
  return { botShown, openBotUI, closeBotUI };
};
