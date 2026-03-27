const inititalState = {count:0}

export const counterReducer = (state = inititalState, action) =>{
    switch(action.type){
        case "INCREMENT" : return {count : state.count+1};
        case "DECREMENT" : return {count : state.count-1};
        default : return state;
    }
}