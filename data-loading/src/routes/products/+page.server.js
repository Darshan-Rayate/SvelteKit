 
export const load = async (serverLoadEvent ) => {
    console.log("Load function called in page.server.js")
    const{fetch , parent} = serverLoadEvent;
    const parentData = await parent();
    const {userName} = parentData;
  const title = "list of available products";
  const response = await fetch("http://localhost:4000/products");
  const products = await response.json();
    return {
        title,
        products,
        userName
       
    };
}; 