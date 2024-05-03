 import { error, redirect  } from '@sveltejs/kit';
export const load = async (serverLoadEvent ) => {
    console.log("Load function called in page.server.js")
    const{fetch,params} = serverLoadEvent;
    const {productId} = params
    if(productId>3)
    throw error(404,"Product Not Found");

    if(productId>10) 
    throw redirect(307,'/products')
  const title = " product description";
 
  const response = await fetch(`http://localhost:4000/products/${productId}`);
  const product = await response.json();
    return {
        title,
        product
       
    };
}; 

export const prerender =true;