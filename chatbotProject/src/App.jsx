import { useState,useEffect } from 'react'
import ChatInput  from './components/ChatInput.jsx'
import  ChatReplies  from './components/ChatReplies.jsx'
import './App.css'

 
export function App() {
  const [chatMessages,setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages');

    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem('chatMessages',JSON.stringify(chatMessages));
  },[chatMessages]);

  return (
      <div className="app-container">
        
        <ChatReplies 
          chatMessages = {chatMessages}
        />
        <ChatInput  
          chatMessages = {chatMessages}
          setChatMessages = {setChatMessages}
        />
      </div>
    );
}
      

