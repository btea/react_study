import * as ActionTypes from './ActionTypes.js';
import AppDisptcher from './AppDisptcher.js';

export const increment = (counterCaption) => {
    AppDisptcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    });
};

export const decrement = (counterCaption) => {
    AppDisptcher.dispatch({
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    })
}