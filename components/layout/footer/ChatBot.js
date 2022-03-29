import React, { useState } from "react";
import { useBotContext } from "../../store/bot-context";
import {
  RobContainer,
  HeadContainer,
  Avatar,
  RobDescription,
  ChatContainer,
  BotLine,
  QuestionLine,
  CloseIcon,
  BotQuestion,
} from "./ChatBotStyles";
import MessageLoader from "./MessageLoader";
const robContent = {
  self: [
    "Hello! My name is Adrian Bot 🤖",
    "I know as much as Adrian. Maybe even a little bit more! 😉",
    "How can I help you today?",
  ],
  question: [
    "I'm good, just wanna say hi.",
    "Fun facts about you?",
    "Other ways to contact you?",
    "I'd like to hire you!",
  ],
  answer: [
    "Well hi there! Thanks for saying hi 😁.I hope you've enjoyed browsing my website!",
    "1. I used to be a digital media editor✍️ on Tencent platform for 4 years. And there was one article that I wrote got more than 15 million views in less than 15 hours. 2. I want to become a competitive powerlifer💪 in my 30's, and a jacked old man in my 80's 😈. 3. I really really love my wife. She is the most gorgeous woman in the world 👩!",
    "📧 Here is my email:adrian.li.dev@gmail.com. I'm always open to job opportunities and new connections🤝!",
    "That's great! I'm so Excited🕺! Have a look at myresume💾and let'schat💌further!",
  ],
};

const ChatBot = () => {
  const [chatStart, setChatStart] = useState(false);
  const [questionState, setQuestionState] = useState(robContent.question);
  const [questionIndex, setQuestionIndex] = useState(null);
  const { botShown, closeBotUI } = useBotContext();
  const clickHandler = (index) => {
    console.log(index);
    setChatStart(true);
    setQuestionIndex(index);
    // const robContentcopy = robContent.question.map((entry, indx) =>
    //   indx === index ? null : entry
    // );
    // setQuestionState(robContentcopy);
    // console.log(robContentcopy);
  };
  return (
    <>
      {botShown && (
        <RobContainer>
          <HeadContainer>
            <Avatar src="/images/avatar/avatar.jpg" alt="avatar photo" />
            <RobDescription>
              <span>Andy Robot</span>
              <span>Ask me a question</span>
            </RobDescription>
            <CloseIcon onClick={closeBotUI}>
              <span />
            </CloseIcon>
          </HeadContainer>

          <ChatContainer>
            <div>
              {robContent.self.map((entry, index) => (
                <BotLine key={index}>{entry}</BotLine>
              ))}
            </div>

            {chatStart && (
              <>
                <div>
                  <QuestionLine>
                    {robContent.question[questionIndex]}
                  </QuestionLine>
                </div>
                <div>
                  <BotLine>{robContent.answer[questionIndex]}</BotLine>
                </div>
              </>
            )}

            <div>
              {questionState.map((que, index) =>
                questionIndex === index ? (
                  ""
                ) : (
                  <BotQuestion
                    key={index}
                    onClick={clickHandler.bind(null, index)}
                  >
                    {que}
                  </BotQuestion>
                )
              )}
            </div>
          </ChatContainer>
          <MessageLoader />
        </RobContainer>
      )}
    </>
  );
};

export default ChatBot;
