
import immutable from "immutable"

const defaultState = immutable.fromJS({
    banner: [],
    count: 2020,
})


export const data = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {


        case "changeCount":
            return state.update("count", x => x + action.payload);
            break;

        case "getBanner":
            return state.set("banner", action.payload);
            break;
        case "getGoodList":
            return state.set("goodList", action.payload);
            break;
        default:
            return state;
            break
    }
}