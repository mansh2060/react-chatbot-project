import { useEffect,useRef } from "react";
import { ChatMessage }  from './ChatMessage.jsx'


export default function ChatReplies({chatMessages}) {

  const chatMessageRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessageRef.current;
    if (containerElem){
      containerElem.scrollTop = containerElem.scrollHeight; 
    }
  },[chatMessages]);

  return (
    <div 
      className = "chat-message-container"
      ref = {chatMessageRef}
      >
      {chatMessages.map((chatMessage) => {
      return (
          <ChatMessage
            message = {chatMessage.message}
            sender = {chatMessage.sender}
            key = { chatMessage.id }
            time = {chatMessage.time}
            
            
          />
        )
      })}
    </div>
  ); 
  
}