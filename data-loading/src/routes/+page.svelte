<script>
import { goto , preloadData } from '$app/navigation'
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/products">Products List</a>


<button
 on:focus = {async() =>{
await preloadData('/products')
 }}
 on:mouseOver = {async() =>{
await preloadData('/products')
 }}
 on:click = { ()=>
{goto('/products')}
}>Go to Products </button>