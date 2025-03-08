import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { conversationContext } from "../../context/conversationContext";

const SearchInput = () => { 
	const [searchTerm, setSearchTerm] = useState('');
	const {conversations, setFilteredConversations}= useContext(conversationContext);
	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
		const value = e.target.value.trimStart().toLowerCase();
        const filtered = conversations.filter(convo =>
            convo.fullName.toLowerCase().includes(value)
        );
        setFilteredConversations(filtered);
	}
	return (
		<form onSubmit={(e)=>{e.preventDefault()}} className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full p-2 focus:ring-2 focus:ring-sky-500 transition duration-200'
				onChange={handleSearchChange}
				value={searchTerm}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white hover:bg-sky-600 transition duration-200'>
				<FaSearch className='w-5 h-5' />
			</button>
		</form>
	);
};
 
export default SearchInput;

