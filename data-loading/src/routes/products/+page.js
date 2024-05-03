import Product from './product.svelte';

export const load = async (loadEvent ) => {
    console.log("Load function called in page.js")
    const{fetch} = loadEvent;
    const notification = "End of Season Sale";
  const title = "list of available products";
  const response = await fetch("http://localhost:4000/products");
  const products = await response.json();
    return {
       
        title,
        products,
        Component: Product,
        notification
    };
};   

export const ssr = true 
export const csr = false

export const prerender = true;