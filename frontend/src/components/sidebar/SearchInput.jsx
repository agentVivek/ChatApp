import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full p-2 focus:ring-2 focus:ring-sky-500 transition duration-200'
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white hover:bg-sky-600 transition duration-200'>
				<FaSearch className='w-5 h-5' />
			</button>
		</form>
	);
};

export default SearchInput;

