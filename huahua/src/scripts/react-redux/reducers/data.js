
const defaultState = {
    count:1910,
    city:"黄石大冶",
    show:true,
    mv:[]
}


export const data = (state=defaultState,action)=>{
    console.log(action);
    switch(action.type){

        case "COUNTADD":
        return {...state,count:++state.count}
        break;

        case "countDesc":
        return {...state,count:--state.count}
        break;

        case "changeCount":
        return {...state,count:state.count+action.payload}
        break;

        case "changeCity":
        return {...state,city:action.payload}
        break;

        case "getMvAsync":
        return {...state,mv:action.payload}
        break;

        
        default:
        return state;
        break;
    }
}