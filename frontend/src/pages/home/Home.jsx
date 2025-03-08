import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import ConversationProvider from "../../context/conversationContext";

const Home = () => {
	return (
		<div className='flex w-full bg-transparent sm:h-[450px] md:h-[550px] rounded-lg backdrop-filter bg-opacity-0'>
			<ConversationProvider>
			<Sidebar />
			<MessageContainer />
			</ConversationProvider>
		</div>
	); 
};
export default Home;  