import React from 'react';
import Message from '../Message/Message';
import s from './Messages.module.css';

const Messages = (props) => {
  const newMessageRef = React.createRef();

  const sendMessage = () => {
    const text = newMessageRef.current.value;
    props.sendMessage(text);
    newMessageRef.current.value = '';
  }
  return (
    <div className={s.messages}>
      {
        props.messages.map(message => <Message key={message.text + Math.random()} text={message.text} />)
      }
      <div className={s.send_message_container}>
        <textarea ref={newMessageRef} className={s.input}></textarea>
        <button onClick={sendMessage} className={s.send_message_button}>send</button>
      </div>
    </div>
  )
};

export default Messages;