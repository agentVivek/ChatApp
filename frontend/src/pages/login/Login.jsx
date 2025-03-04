const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen w-full'>
			<div className='w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400/30 backdrop-blur-lg'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login <span className='text-blue-500'>ChatApp</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' />
					</div>

					<a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</a>

					<div>
						<button className='btn btn-primary btn-block mt-4'>Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
