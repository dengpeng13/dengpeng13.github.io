

import {axios} from "&";

export const countDesc = {
    type:"countDesc"
}

export const changeCount = (payload)=>{
    return {
        type:"changeCount",
        payload
    }
}

export function changeCity(payload){
    return {
        type:"changeCity",
        payload
    }
}

export async function  getMvAsync({url,params}){
    const res =  await axios.get(url);
    return {
        type:"getMvAsync",
        payload:res.data.result.data
    }
}