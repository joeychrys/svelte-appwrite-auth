<script>
	import { goto } from '$app/navigation';

	function login() {
		goto('/login');
	}
</script>

<div class="min-h-screen flex justify-center items-center bg-gray-900 text-white">
    <div class="bg-gray-800 rounded-lg shadow-lg p-8">
      <h1 class="text-4xl font-bold mb-4">Simple Auth Demo</h1>
      <p class="text-xl mb-8">A SvelteKit app demonstrating email authentication</p>
      <button
        class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow"
        on:click={login}
      >
        Log In
      </button>
    </div>
</div>
  
  
