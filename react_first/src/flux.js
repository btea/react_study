// 1、Dispatcher  AppDispatcher
// 几乎所有的项目都只需要拥有一个Dispatcher，创造Dispatcher对象
import {Dispatcher} from 'flux';
export default new Dispatcher();

// 2、action  ActionTypes.js 定义action类型
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

// Actions.js中定义action构造函数
import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from './AppDisptcher.js';

export const increment = (counterCaptio) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    });
};

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
       type: ActionTypes.DECREMENT,
       counterCaption: counterCaption
    });
};

// 3、store 一个Store也是一个对象，这个对象存储应用状态，同时还要接受Dispatcher派发的动作，根据动作来决定是否需要更新应用状态

// src/stores/CounterStore.js
const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
};
const CounterStore = Object.assign({},EventEmitter.prototype,{
    getCounterValues: function () {
        return counterValues;
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT,callback);
    }
});
// 当store的状态发生改变时，需要通知应用的其他部分做出响应。在我们的应用中，做出响应的部分当然是View部分，但是我们不应该硬编码这种联系，应该用消息的方式建立
// Store和View之间的联系。这就是为什么我们让CounterStore扩展了EventEmitter.prototype,等于让CounterStore成了EventEmitter对象，一个EventEmitter实例对象支持
// 下列相关函数。
// emit函数  ，可以广播一个特定的事件，第一个参数是字符串类型的事件名称；
// on函数，可以增加一个挂在这个EventEmitter对象特定事件上的处理函数，第一个参数是字符串类型的事件名称，第二个参数是处理函数；
// removeListener函数，和on函数做的事情相反，删除挂在这个EventMitter对象特定事件上的处理函数，和on函数一样，第一个参数是事件名称，第二个参数是处理函数。要注意，
// 如果调用removeListener函数，就一定要保留对处理函数的引用。
// 对于CounterStore对象，emitChange,addChangeListener,removeChangeListener,函数就是利用EventEmitter上述的三个函数完成对CounterStore状态更新的广播、
// 添加监听函数和删除监听函数等操作。
// CounterStore还提供了一个getCounterValues函数，用于让应用中其他模块可以读取当前的计数值，当前的计数值存储在文件模块级的变量counterValues中。



