import { BsSend } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";

const MessageInput = () => {
	return (
		<form className="px-4 my-3 relative">
			<div className="relative w-full">
				<input
					type="text"
					className="border text-sm rounded-full block w-full p-3 pr-12 bg-gray-800 border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
					placeholder="Send a message..."
				/>
				<button
					type="submit"
					className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white transition duration-300"
				>
					{/* <BsSend size={20} /> */}
					<BsFillSendFill />
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
