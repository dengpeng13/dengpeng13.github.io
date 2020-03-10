import immutable from "immutable";

const defaultState = immutable.fromJS({
    count:2020
})


export const count = (state=defaultState,action)=>{
    console.log(action)
    switch(action.type){
        default:
            return state;
            break;
    }
}