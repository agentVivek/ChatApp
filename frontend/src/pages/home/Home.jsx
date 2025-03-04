import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex w-full bg-transparent sm:h-[450px] md:h-[550px] rounded-lg backdrop-filter bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home; 