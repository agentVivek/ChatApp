import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { authContext } from '../context/authContext'

const useLogout = () => {
    const {setAuthUser} = useContext(authContext);
    const logout = async () => { 
    try{
            const res = await fetch("/api/auth/logout", {
            method: "POST", 
            headers: {"Content-Type" : "application/json"},
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.removeItem("chat-user");
            setAuthUser(null);
            toast.success("LoggedOut Successfully");
        } catch(error){
            toast.error(error.message);
        }
    }
  return logout; 
}

export default useLogout;