<script lang="ts">
	import { goto } from '$app/navigation';
	import { state } from '../../store';

	let email = '';
    let name = ''
	let password = '';
	let confirmPassword = '';
	let error: null = null;

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			state.alert({
				color: 'red',
				message: 'Passwords do not match'
			});
			return;
		}

		try {
			await state.signup(email, password, name);
			goto("/success")
		} catch (error: any) {
			state.alert({
				color: 'red',
				message: error.message
			});
		}
	};
</script>
<div class="min-h-screen flex justify-center items-center bg-gray-900 text-white">
	<div>
		{#if $state.alert}
			<div class="bg-red-500 text-white rounded-lg p-4 mb-4 animate-fade-in-slow">
				<p>{$state.alert.message}</p>
			</div>
		{/if}
		<div class="bg-gray-800 rounded-lg shadow-lg p-8">
			<h1 class="text-4xl font-bold mb-4">Sign Up</h1>
			<form on:submit={handleSubmit} class="mb-8">
                <div class="mb-4">
					<label class="block text-xl font-bold mb-2" for="name"> Name </label>
					<input
						class="border border-gray-600 px-3 py-2 w-full rounded-lg text-gray-800"
						type="text"
						id="name"
						name="name"
						required
						bind:value={name}
					/>
				</div>
				<div class="mb-4">
					<label class="block text-xl font-bold mb-2" for="email"> Email </label>
					<input
						class="border border-gray-600 px-3 py-2 w-full rounded-lg text-gray-800"
						type="email"
						id="email"
						name="email"
						required
						bind:value={email}
					/>
				</div>
				<div class="mb-4">
					<label class="block text-xl font-bold mb-2" for="password"> Password </label>
					<input
						class="border border-gray-600 px-3 py-2 rounded-lg w-full text-gray-800"
						type="password"
						id="password"
						name="password"
						required
						bind:value={password}
					/>
				</div>
				<div class="mb-4">
					<label class="block text-xl font-bold mb-2" for="confirmPassword"> Confirm Password </label>
					<input
						class="border border-gray-600 px-3 py-2 rounded-lg w-full text-gray-800"
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						required
						bind:value={confirmPassword}
					/>
				</div>
				<button
					class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow"
					type="submit"
				>
					Sign Up
				</button>
			</form>
			<p class="text-xl">
				Already have an account? <a href="/login" class="text-green-500">Log in here.</a>
			</p>
		</div>
	</div>
</div>
<style>
	.animate-fade-in-slow {
		animation: fadeInSlow 0.5s ease-out forwards;
		opacity: 0;
	}

	@keyframes fadeInSlow {
		from {
			opacity: 0;
			transform: translateY(10px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>