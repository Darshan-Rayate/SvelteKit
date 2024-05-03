import {redirect} from '@sveltejs/kit'
export const load = ({cookies,url}) =>{

    if(!cookies.get("username")){
        throw redirect (307,`/auth?redirectTo=${url.pathname}`); 
    }
 const newsAPIKey = 'YOUR_NEWS_API_KEY';

console.log(newsAPIKey);

const news= [
    {id:1 , title:'news 1'},
    {id:2 , title:'news 2'},
    {id:3 , title:'news 3'}
];

return {news};


}