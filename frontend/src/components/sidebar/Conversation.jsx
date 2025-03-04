const Conversation = () => {
	return (
		<>
			<div className='flex gap-3 items-center hover:bg-sky-500 hover:bg-opacity-70 rounded-lg p-3 cursor-pointer transition duration-200 ease-in-out'>
				<div className='avatar online'>
					<div className='w-12 rounded-full'>
						<img
							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex justify-between items-center'>
						<p className='font-semibold text-gray-100'>John Doe</p>
						<span className='text-xl'>🎃</span>
					</div>
				</div>
			</div>

			<div className='divider my-1' />
		</>
	);
};
export default Conversation;


