import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const logo = new URL('../../assets/header.png', import.meta.url).href;
	const hero = new URL('../../assets/logo.png', import.meta.url).href;

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		// TODO: replace with real auth call
		console.log({ email, password });
	}

	return (
		<div className="h-screen overflow-hidden grid md:grid-cols-2 bg-gray-50">
			{/* Left visual panel */}
			<div className="relative hidden md:block">
				<img src={hero} alt="Decorative" className="w-full h-full object-contain drop-shadow-2xl opacity-90" />
			</div>

			{/* Right form panel */}
			<div className="flex justify-center p-6 md:p-10">
				<div className="w-full max-w-md mt-30">
					<div className="flex flex-col items-center gap-4 mb-6">
						<img src={logo} alt="Brand" className="w-full h-25" />
						<h1 className="text-3xl font-bold text-indigo-700">Resident Author</h1>
						<p className="text-gray-600 text-xl font-extrabold">Welcome back</p>
						<p className="text-sm text-gray-500 -mt-3">Sign in to continue to your account.</p>
					</div>

					<div className="bg-white rounded-xl shadow-md p-6 md:p-8">
						<form onSubmit={handleSubmit} className="space-y-5">
							<div className="space-y-2">
								<label className="text-sm font-medium text-gray-700">Email Address</label>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
									required
								/>
							</div>

							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<label className="text-sm font-medium text-gray-700">Password</label>
									<a href="#" className="text-sm text-indigo-600 hover:underline">Forgot your password?</a>
								</div>
								<div className="relative">
									<input
										type={showPassword ? 'text' : 'password'}
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="••••••••"
										className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
										required
									/>
									<button
										type="button"
										className="absolute inset-y-0 right-0 px-3 text-sm text-gray-500 hover:text-gray-700"
										onClick={() => setShowPassword((v) => !v)}
									>
										{showPassword ? 'Hide' : 'Show'}
									</button>
								</div>
							</div>

							<button
								type="submit"
								className="w-full rounded-lg bg-indigo-600 text-white font-medium py-2.5 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
							>
								Log in
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}


