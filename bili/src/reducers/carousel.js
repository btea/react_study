import * as REFRESH from './actions';

export default function showCal(state={},action){
    switch(action.type){
        case REFRESH:
            return Object.assign({},state,{
                data: action.state
            });
        default:
            return state;
    }
}