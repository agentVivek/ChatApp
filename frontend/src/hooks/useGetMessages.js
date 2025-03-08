import React, { useContext, useEffect } from 'react'
import { conversationContext } from '../context/conversationContext';
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const {messages, setMessages, selectedConversation} = useContext(conversationContext);
    useEffect(()=>{
        const getMessages = async () => {
            try{
                const res = await fetch(`/api/messages/${selectedConversation._id}`);
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setMessages(data);
            } catch(error){
                toast.error(error.message);
            }
        }
        if(selectedConversation?._id) getMessages();
    }, [selectedConversation?._id]);
}

export default useGetMessages;