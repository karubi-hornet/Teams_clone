import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import ChatBox from 'react-chat-plugin';

const MainPageWrapper = styled('div')(({ theme }) => ({
  backgroundColor: 'lightGreen',
  marginTop: '6vh',
}));


function MyMainPage() {
  const [messages, setMessages] = useState([
    {
      text: "user2 has joined the conversation",
      timestamp: +new Date(),
      type: "notification"
    },
    {
      author: { username: "user2", id: 2, avatarUrl: null },
      text: "Hi, friend!",
      type: "text",
      timestamp: +new Date(),
    },
  ]);

  const handleOnSendMessage = (message) => {
    setMessages(
      messages.concat({
        author: {
          username: "you",
          id: 1,
        },
        text: message,
        timestamp: +new Date(),
        type: "text"
      })
    );
  };

  return (
    <MainPageWrapper>
      <ChatBox
        messages={messages}
        userId={1}
        onSendMessage={handleOnSendMessage}
        height={"94vh"}
        // width={'800px'}
      />
    </MainPageWrapper>
  );
}
export default MyMainPage;