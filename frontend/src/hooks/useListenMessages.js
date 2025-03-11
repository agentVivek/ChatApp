import React, { useContext, useEffect } from 'react'
import { socketContext } from '../context/socketContext'
import { conversationContext } from '../context/conversationContext';
import notificationSound from '../assets/sounds/notification.mp3';


const useListenMessages = () => {
  const {socket} = useContext(socketContext);
  const {messages, setMessages} = useContext(conversationContext);
  useEffect(()=>{
    const audio = new Audio(notificationSound);
    socket?.on("newMessage", (newMessage)=>{
        audio.play();
        setMessages([...messages, newMessage]);
    })
    return () => socket?.off("newMessage");
  }, [socket]);

}

export default useListenMessages;