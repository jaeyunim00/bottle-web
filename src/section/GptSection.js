import styled, { keyframes } from "styled-components";
import React, { useState } from "react";

const GptSection = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [mainMsgVisible, setMainMsgVisible] = useState(true); // 추가된 부분
  const [chatContainerVisible, setChatContainerVisible] = useState(true);

  const apiKey = "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"; // OpenAI API 키

  const handleInputFocus = () => {
    setMainMsgVisible(false);
    setChatContainerVisible(false);
  };

  const handleInputBlur = () => {
    setMainMsgVisible(true);
    setChatContainerVisible(true);
  };

  const handleUserSubmit = async (event) => {
    event.preventDefault();
    disableUserInput();
    const message = userInput;
    setChatLog([]);
    displayMessage(message, "사용자");

    try {
      const botResponse = await getBotResponse(message);
      hideLoadingIndicator();
      displayMessage(botResponse, "GNI");
    } catch (error) {
      console.error("Error fetching bot response:", error);
      // Handle error appropriately (e.g., display an error message)
    } finally {
      enableUserInput();
      setUserInput("");
    }
  };

  const disableUserInput = () => {
    // Implement your logic to disable user input
  };

  const enableUserInput = () => {
    // Implement your logic to enable user input
  };

  const showLoadingIndicator = () => {
    // Implement your logic to show loading indicator
  };

  const hideLoadingIndicator = () => {
    // Implement your logic to hide loading indicator
  };

  const getBotResponse = async (userMessage) => {
    const apiUrl = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };
    const data = {
      model: "ft:gpt-3.5-turbo-0613:personal::8NrkgSRZ",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: userMessage },
      ],
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData.choices[0].message.content;
  };

  const displayMessage = (message, sender) => {
    setChatLog((prevChatLog) => [...prevChatLog, { message, sender }]);
  };

  return (
    <Wrapped>
      <Container>
        <MainMsg
          style={{
            opacity: mainMsgVisible ? 1 : 0,
            transition: "opacity 0.7s",
          }}
        >
          <MainMsgHead>안녕하세요!</MainMsgHead>
          <MainMsgTail>글로벌 보일링에 대한 질문이 있으신가요?</MainMsgTail>
        </MainMsg>
        <ChatContainer
          style={{
            transform: chatContainerVisible
              ? "translateY(0)"
              : "translateY(-200px)",
            transition: "transform 1s",
          }}
        >
          <ChatForm onSubmit={handleUserSubmit}>
            <ChatInput
              type="text"
              value={userInput}
              placeholder="질문을 입력하세요"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChange={(e) => setUserInput(e.target.value)}
            ></ChatInput>
            <ChatBtn
              type="submit"
              style={{
                backgroundColor: mainMsgVisible ? "gray" : "#212121",
                transition: "opacity 0.5s",
              }}
            >
              ENTER
            </ChatBtn>
          </ChatForm>
          <Line
            style={{
              backgroundColor: mainMsgVisible ? "gray" : "#212121",
              transition: "opacity 0.5s",
            }}
          ></Line>
          <ChatLog
            style={{
              position: "absolute",
              opacity: mainMsgVisible ? 0 : 1,
              transition: "opacity 0.7s",
              lineHeight: 1.5,
            }}
          >
            {chatLog.map((message, index) => (
              <ChatLogMessage
                key={index}
                className={`message ${message.sender}`}
              >
                {/* <div
                  style={{
                    backgroundColor: "red",
                    padding: "3px",
                  }}
                >
                  {message.sender}
                </div> */}
                <div>{message.message}</div>
              </ChatLogMessage>
            ))}
          </ChatLog>
        </ChatContainer>
      </Container>
    </Wrapped>
  );
};

const ChatContainer = styled.div`
  border-radius: 5px;
  box-sizing: border-box;
  width: 70%;
  margin-top: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  margin: 15px 0;
`;

const ChatLog = styled.div`
  border-radius: 5px;
  overflow-y: scroll;
  max-height: 300px;
  background-color: yellow;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 30px;
  font-size: 15px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const ChatLogMessage = styled.div`
  // background-color: royalBlue;
  margin: 20px 0;
`;

const ChatForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: relative;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 20px 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;

const ChatBtn = styled.button`
  padding: 8px 16px;
  background-color: #212121;
  position: absolute;
  right: 30px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const LoadingIndicator = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Wrapped = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MainMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #212121;
`;

const MainMsgHead = styled.span`
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;
`;

const MainMsgTail = styled.span`
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
`;

const InputWrap = styled.div`
  height: 88px;
`;

const InputMsg = styled.textarea`
  height: inherit;
  width: 95%;
`;

export default GptSection;
