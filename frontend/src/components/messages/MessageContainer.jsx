import { useContext } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { conversationContext } from "../../context/conversationContext";
import { authContext } from "../../context/authContext";
import { TiArrowBack } from "react-icons/ti";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useContext(conversationContext);

	// If no chat is selected, show the placeholder (Desktop only, as Mobile hides this container via Home.jsx)
	if (!selectedConversation) {
		return <NoChatSelected />;
	}

	return (
		<div className="flex flex-col h-full w-full border-l border-slate-500">
			{/* Header */}
			<div className="bg-slate-500 px-4 py-2 mb-2 flex items-center gap-2">
				{/* Back Button: Visible ONLY on mobile (md:hidden) */}
				<button 
					className='md:hidden text-3xl text-white cursor-pointer mr-2' 
					onClick={() => setSelectedConversation(null)}
				>
					<TiArrowBack />
				</button>

				<div className="avatar placeholder">
					<div className="bg-neutral text-neutral-content rounded-full w-8">
						<img src={selectedConversation.profilePic} alt="user avatar" />
					</div>
				</div>
				<span className="text-gray-900 font-bold ml-2">{selectedConversation.fullName}</span>
			</div>

			<Messages />
			<MessageInput />
		</div>
	);
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