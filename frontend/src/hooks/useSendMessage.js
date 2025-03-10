import React, { useContext } from 'react'
import { conversationContext } from '../context/conversationContext'

const useSendMessage = () => {
    const {selectedConversation, setMessages} = useContext(conversationContext);
    const sendMessage = async (message) => {
        try{
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({message}),
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setMessages((prev)=>[...prev, data])
        } catch(error){
            toast.error(error.message); 
        }
    }
    return sendMessage;
}

export default useSendMessage;