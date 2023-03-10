import React, { useState, useEffect, useRef } from "react";
import { useBotContext } from "../../store/bot-context";
import Link from "next/link";
import Image from "next/image";
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
    "Hello! My name is Andy Liu 🤖",
    "It's very nice to meet you here! 😉",
    "How can I help you today?",
  ],
  question: [
    "I'm good, just wanna say hi.",
    "Fun facts about you?",
    "Other ways to contact you?",
    "I'd like to hire you!",
  ],
  answer: [
    <p key="a1">
      {"Well Hi there 😁. I hope you've enjoyed browsing my website!"}
    </p>,
    [
      <p key="a2.1">
        {
          " 1️⃣ I used to work as a refrigeration engineer at GEA group where I had been working to standardlize products. This work reduced even more than 60% hours during project's enginerring phase 📉."
        }
      </p>,
      <p key="a2.2">
        2️⃣ I love travlling around enjoying the view of moutain soared into the
        sky, stream running down the wood 🌄.
      </p>,
      <p key="a2.3">
        3️⃣ I really really love my family👨‍👩‍👦.They are my precious in my world!
      </p>,
    ],
    <p key="a3">
      Click <a href={"mailto:andyliu6606@gmail.com"}>📧</a> to send andy an
      email to <a href={"mailto:andyliu6606@gmail.com"}>liuhua6606@gmail</a>. I
      am open to job opportunities and new connections🤝!
    </p>,
    <p key="a4">
      <span>{"That's great! I'm so Excited 🕺!"}</span>
      <span>
        Have a look at my webpage resume
        <Link href="/resume">
          <a> 💾</a>
        </Link>
        here or download
        <a
          href="https://drive.google.com/file/d/1lq_mq2HxvCNrQlysn4-WumWswMtvOFPZ/view"
          download
        >
          💼
        </a>
        directly here. and let us chat
        <a href={"mailto:andyliu6606@gmail.com"}>💌</a> further!
      </span>
    </p>,
  ],
};
const ChatBot = () => {
  const [chatStart, setChatStart] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(null);
  const { botShown, closeBotUI, tbotRef } = useBotContext();
  const [isLoading, setIsLoading] = useState(true);
  const botRef = useRef();
  const answerRef = useRef();
  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (
        !botRef?.current?.contains(e.target) &&
        !tbotRef?.current?.contains(e.target)
      )
        closeBotUI();
    };
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, []);
  /* add spinner before the message shown. Using setTimeout and useEffect to delay and init component together.
  Reuse this component for different question so that we need useState to make this component re-render. 
  but the problem is that state will perserve and i can only change state in useEffect part and can not re-initial state when 
  it's rendering. in this case we need to another handler to reinitial state for each re-render. */
  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsLoading(false);
      answerRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [questionIndex]);

  //Re-init re-render state for delay.
  const clickHandler = (index) => {
    setChatStart(true);
    setQuestionIndex(index);
    setIsLoading(true);
  };
  return (
    <>
      {botShown && (
        <RobContainer ref={botRef}>
          <HeadContainer>
            <Avatar>
              <Image
                src="/images/avatar/avatar.jpg"
                alt="avatar photo"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 0%"
              />
            </Avatar>
            <RobDescription>
              <span>Andy Robot</span>
              <span>Ask me a question</span>
            </RobDescription>
            <CloseIcon onClick={closeBotUI}>
              <span />
            </CloseIcon>
          </HeadContainer>
          <ChatContainer>
            {robContent.self.map((entry, index) => (
              <BotLine key={index}>
                <p>{entry}</p>
              </BotLine>
            ))}

            {chatStart && (
              <>
                <QuestionLine ref={answerRef}>
                  <p>{robContent.question[questionIndex]}</p>
                </QuestionLine>

                {isLoading && <MessageLoader />}
                {!isLoading && (
                  <BotLine>{robContent.answer[questionIndex]}</BotLine>
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
                    <p>{que}</p>
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
