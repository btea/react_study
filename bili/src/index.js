import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import './reset.css';
import Nav from './component/nav_title';
import showCal from './reducers/carousel';

let store = createStore(showCal);
class Cover extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    fetchCarousel(){
        var url = 'https://bird.ioliu.cn/v1?url=https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695';
        return fetch(url);
    }

    data(){
        this.fetchCarousel().then(response => {
            response.json().then(res => {
                store.dispatch({
                    type: 'REFRESH',
                    res
                });
                console.log(store.subscribe(store.getState));
            })
        })
    }

    componentDidMount(){
       this.data();
    }
    render(){
        return(
            <ul id="header">
                <Nav text="直播"/>
                <Nav text="追番"/>
                <Nav text="推荐"/>
                <Nav text="影视"/>
                <Nav text="专栏"/>
            </ul>
        );
    }

}

ReactDOM.render(<Cover />, document.getElementById('root'));
