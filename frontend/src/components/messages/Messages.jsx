import Message from "./Message";

const Messages = () => {
	return (
		<div className="flex-1 overflow-y-auto px-2 md:px-4 py-4 space-y-4 max-h-[calc(100vh-100px)]">
			{Array.from({ length: 12 }).map((_, index) => (
				<Message key={index} />
			))}
		</div>
	);
};

export default Messages;

