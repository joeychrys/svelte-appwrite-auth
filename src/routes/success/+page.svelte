<script>
	import { goto } from '$app/navigation';
	import { state } from '../../store';
	import { onMount } from 'svelte';

	onMount(async () => {
		await state.checkSession().catch(() => {
			goto('/login');
		});
	});

	const logout = async () => {
		await state.logout();
		goto('/');
	};
</script>

{#if $state.account}
	<div class="min-h-screen flex justify-center items-center bg-gray-900 text-white">
		<div class="flex flex-col justify-center items-center space-y-8">
			<div class="bg-gray-800 rounded-lg shadow-lg p-8 w-1/2">
				<h1 class="text-4xl font-bold mb-4">Welcome {$state.account.name}</h1>
				<p class="text-xl mb-8">You have successfully logged in.</p>
				<button
					on:click={logout}
					class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow"
				>
					Log Out
				</button>
			</div>
			<div class="bg-gray-800 rounded-lg shadow-lg p-8 w-1/2">
				<h1 class="text-4xl font-bold mb-4">Project Issues</h1>
				<p class="text-xl mb-8">
					Using local storage for session management in a web application is not secure and can lead
					to security issues. Session storage is a client-side storage mechanism that can be easily
					accessed or manipulated by hackers, allowing them to steal user credentials or tokens and
					access sensitive data. It's also vulnerable to cross-site scripting attacks, where
					attackers can inject malicious code and steal user data or authentication information. Web
					developers should use more secure methods like token-based authentication or server-side
					sessions to protect users' sensitive information.
				</p>
				<a
					href="https://www.rdegges.com/2018/please-stop-using-local-storage/"
					class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow"
					target="_blank" rel="noreferrer"
				>
					Learn More
				</a>
			</div>
		</div>
	</div>
{/if}
