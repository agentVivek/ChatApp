import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const logout = useLogout();
	return (
		<div className='mt-auto p-2 flex items-center gap-2 cursor-pointer text-white hover:text-red-500 transition duration-200'>
			<BiLogOut className='w-6 h-6' onClick={()=> {logout()}}/>
			<span className='loading loading-spinner hidden'></span>
		</div>
	);
}; 
 
export default LogoutButton;
