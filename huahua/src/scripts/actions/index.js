

import {axios} from "&"
export function changeCount(payload){
    return {
        type:'changeCount',
        payload
    }
}



export async function getBanner({url}){
    const res = await axios.get(url);
   
    return{
        type:'getBanner',
        payload:res.data.result
    }
    
}


export async function getGoodList({url,params}){
    const res = await axios.get(url,{params});
    return {
        type:"getGoodList",
        payload:res.data.result
    }
} 