import React, { useContext, useEffect } from 'react'
import toast from 'react-hot-toast'
import { conversationContext } from '../context/conversationContext'

const useGetConversations = () => {
    const {setConversations} = useContext(conversationContext);
    useEffect(() => {
        const getConversations = async () => {
            try{
                const res = await fetch("/api/users");
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch(error){
                toast.error(error.message);
            }
        }
        getConversations();
    }, []);
}

export default useGetConversations