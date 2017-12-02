// import {createStore,combineReducers, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

// let createStoreMiddleware = applyMiddleware(thunk)(createStore);


function fetchCarousel(){
    var url = 'https://bird.ioliu.cn/v1?url=https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695';
    return fetch(url);
}

export default function data(){
    fetchCarousel().then(response => {
        response.json().then(res => {
            console.log(res);
            return res;
        })
    })
}