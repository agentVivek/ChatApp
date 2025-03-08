import { useContext } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { conversationContext } from "../../context/conversationContext";
import { authContext } from "../../context/authContext";

const MessageContainer = () => {
	const {selectedConversation} = useContext(conversationContext);
	if(!selectedConversation) {return(
		<NoChatSelected />
	)
	} else {
	return (
	
		<div className="h-screen w-full md:min-w-[450px] flex flex-col border bg-transparent rounded-lg shadow-md ">
			{/* Header */}
			<div className="bg-gray-700 text-white px-4 py-3 sticky top-0 z-10">
				<span className="text-gray-300">To:</span>{" "}
				<span className="font-bold text-white">{selectedConversation.fullName}</span>
			</div>

			{/* Messages Section */}
				<Messages />
				
			{/* Input Section */}
			<div className="p-3 border-t border-gray-600">
				<MessageInput />
			</div>
		</div>
	);
	}
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useContext(authContext);
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser?.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
			</div>
		</div>
	);
};
