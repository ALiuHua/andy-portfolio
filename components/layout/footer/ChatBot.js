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
          href="https://drive.google.com/file/d/1Neh66oJyiG87217mAF55pRB-Lr48LvYK/view?usp=sharing"
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
console.log(robContent, robContent.self[0]);
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
