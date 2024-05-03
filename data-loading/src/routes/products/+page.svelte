<script>

export let data;
    const products = data.products;
    const Component = data.Component;
    const userName = data.userName;
</script>

<h1>{data.title} for {userName}</h1>
{#each products as product}
<div>
<Component {product} />
</div>
{/each}