import React, { useState, useEffect, useRef } from "react";
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
  BotQuestionWrapper,
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
    "📧 Here is my email: adrian.li.dev@gmail.com. I'm always open to job opportunities and new connections🤝!",
    "That's great! I'm so Excited 🕺! Have a look at myresume 💾 and let'schat 💌 further!",
  ],
};

const ChatBot = () => {
  const [chatStart, setChatStart] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(null);
  const { botShown, closeBotUI, tbotRef } = useBotContext();
  const [isLoading, setIsLoading] = useState(true);
  const botRef = useRef();
  const answerRef = useRef();
  // need to be optimized. too many time runing.
  console.log(tbotRef);
  // this event handler will ouccer every time when the chat mount. but at first,i got a
  //bug that this click handler runing twice but i click once. so it's this handler has been
  // attached twice. but only removed once. because i got project page also attacehed the bot component
  // when i click project link which cause handler been attached twice.
  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (
        !botRef?.current?.contains(e.target) &&
        !tbotRef?.current?.contains(e.target)
      )
        closeBotUI();
    };
    console.log("handler added");
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      console.log("handler removed");
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, []);
  // one issue still need to be address: click outside handler still works on click on the contact link.
  // issue on this part:
  /* i want to add spinner before the message shown. it's ok to understand that we need
  to use setTimeout and useEffect together.
  the problem is that i want to create a component that can render spinner first and then render 
  children content later. but because i need to reuse this component for different question. and i need
  useState to make this component re-render. but the problem is that state will perserve and i can 
  only change state in useEffect part and can not re-initial state when it's render. in this case we
  need to another handler to reinitial state for each re-render. */
  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsLoading(false);
      answerRef.current?.scrollIntoView({ behavior: "smooth" });
      // be familary with this functionality: dom.scroolIntoView({ behavior: "smooth" });
    }, 2000);
    return () => {
      clearTimeout(identifier);
    };
  }, [questionIndex]);

  // <a href="mailto: liuhua6606@163.com">Send email</a>   to create a link to send email
  const clickHandler = (index) => {
    setChatStart(true);
    setQuestionIndex(index);
    //Re-init re-render state for delay.
    setIsLoading(true);
    // const robContentcopy = robContent.question.map((entry, indx) =>
    //   indx === index ? null : entry
    // );
    // setQuestionState(robContentcopy);
    // console.log(robContentcopy);
  };
  return (
    <>
      {botShown && (
        <RobContainer ref={botRef}>
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
              <a
                href="https://drive.google.com/file/d/1Neh66oJyiG87217mAF55pRB-Lr48LvYK/view?usp=sharing"
                download
              >
                download file
              </a>
            </div>
            {chatStart && (
              <>
                <div>
                  <QuestionLine ref={answerRef}>
                    {robContent.question[questionIndex]}
                  </QuestionLine>
                </div>
                {isLoading && <MessageLoader />}
                {!isLoading && (
                  <div>
                    {/* <div ref={answerRef}> */}
                    <BotLine>{robContent.answer[questionIndex]}</BotLine>
                  </div>
                )}
              </>
            )}

            <BotQuestionWrapper>
              {robContent.question.map((que, index) =>
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
            </BotQuestionWrapper>
          </ChatContainer>
        </RobContainer>
      )}
    </>
  );
};

export default ChatBot;
