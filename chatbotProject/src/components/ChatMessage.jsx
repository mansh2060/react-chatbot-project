import  robot  from '../assets/robot.png' 
import  user  from '../assets/user.png' 

export function ChatMessage({message,sender,time}) {
  return (
    <div className={sender === 'user' 
    ? 'chat-message-user' 
    : 'chat-message-robot'
      }>
      {sender === 'robot' && (<img src= {robot}
      className = "chat-message-profile"
      />)}
      
      <div className="chat-message-text">
        {message}
        <p>
          {time}
        </p>
        
      </div>
      
      {sender === 'user' && (<img src={user}className="chat-message-profile" />)}
      
    </div> 
  );
}

