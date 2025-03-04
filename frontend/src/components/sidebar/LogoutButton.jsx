import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
	return (
		<div className='mt-auto p-2 flex items-center gap-2 cursor-pointer text-white hover:text-red-500 transition duration-200'>
			<BiLogOut className='w-6 h-6' />
			<span className='loading loading-spinner hidden'></span>
		</div>
	);
};
 
export default LogoutButton;
