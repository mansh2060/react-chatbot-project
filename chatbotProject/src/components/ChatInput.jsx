import { useState } from 'react';
import { Chatbot } from 'supersimpledev'
import  dayjs  from 'dayjs'


export default function ChatInput({chatMessages,setChatMessages}) {

  const time = dayjs().valueOf();

  const currentTime = dayjs(time).format('h:mma');

  const [inputText,setInputText] = useState('');

  const [_,setLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message:inputText,
        sender:'user',
        id:crypto.randomUUID(),
        time:currentTime

      }
    ];

    setLoading(true);
    setChatMessages(newChatMessages);

    setTimeout(() => {
      const response = Chatbot.getResponse(inputText);

      setChatMessages([
      ...newChatMessages,
      {
        message:response,
        sender:'robot',
        id:crypto.randomUUID(),
        time:currentTime
      }
    ]);

      setLoading(false);

    },3000);

    setInputText('');
  }

  function clearChats() {
    setChatMessages([])
    localStorage.removeItem('chatMessages');
  }

  return (
    <div className="chat-input-container">
      <input placeholder="Send a message to Chatbot" size="30"
      onChange = {saveInputText}
      value = {inputText}
      
      />
      <button onClick={sendMessage}>Send</button>  

      <button onClick={clearChats} className='css-clear'>Clear</button>
    </div>
    
  );
}

