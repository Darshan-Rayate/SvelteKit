<script>

export let data;
const title = data.title;
const username = data.username;
const featuredProducts = data.featuredProducts;
</script>
<slot />
<h1>{data.title} for {username}</h1>
{#each featuredProducts as product}
<div>
<h2>{product.title}</h2>
<p> {product.description}</p>
</div>
{/each}