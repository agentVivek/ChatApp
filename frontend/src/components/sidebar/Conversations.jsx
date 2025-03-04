import Conversation from "./Conversation";

const Conversations = () => {
	return (
		<div className='py-2 flex flex-col space-y-2 max-h-144 overflow-y-auto scrollbar-hidden'>
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
		</div>
	);
};
export default Conversations;


