import React,{Component} from 'react';
class ControlPanel extends Component{

    constructor(props){
        super(props);
        this.initValues = [0,10,20];
        const initSum = this.initValues.reduce((a,b) => a + b,0);
        this.state = {
            sum: initSum
        }
    }

    onCountUpdate = (newValue,perviousValue) => {
        const valueChange = newValue - perviousValue;
        this.setState({
            sum: this.state.sum + valueChange
        })
    }

    render(){
        console.log('enter ControlPanel render');
        return (
            <div>
                <Counter caption="First" initValue={this.initValues[0]} onUpdate = {this.onCountUpdate}/>
                <Counter caption="Second" initValue={this.initValues[1]} onUpdate = {this.onCountUpdate}/>
                <Counter caption="Third" initValue={this.initValues[2]}  onUpdate = {this.onCountUpdate}/>
                <br/>
                <span>total count {this.state.sum}</span>
                <br/>
                <button onClick = {() => this.forceUpdate()}>刷新</button>
            </div>
        )
    }
}

class Counter extends ControlPanel{
    constructor(props){
        super(props); // 调用父类的constructor
        // this.add = this.add.bind(this);
        // this.reduce = this.reduce.bind(this);
        this.state = {
            count: this.props.initValue
        };
        console.log('enter constructor  ' + this.props.caption)
    }
    componentWillMount(){
        console.log('enter componentWillMount  ' + this.props.caption);
    }
    componentDidMount(){
        console.log('enter componentDidMount  ' + this.props.caption);
    }

    componentWillReceiveProps(nextProps){
        console.log('enter componentWillReceiveProps  ' + this.props.caption);
    }

    shouldComponentUpdate(nextProps,nextState){
        return (
            (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
        )
    }

    add = () => {
        this.updateCount(true);
    }

    reduce = () => {
        this.updateCount(false);
    }

    updateCount(IsIncrement){
        const previousValue = this.state.count;
        const newValue = IsIncrement ? previousValue + 1 : previousValue - 1;
        this.setState({count: newValue});
        this.props.onUpdate(newValue,previousValue);
    }

    render(){
        console.log('enter render ' + this.props.caption)
        return (
            <div>
                <button onClick = {this.add}>+</button> &nbsp;&nbsp;
                <button onClick = {this.reduce}>-</button>
                {this.props.caption} Count {this.state.count}
            </div>
        )
    }

}
Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f // 默认是一个什么都不做的假函数
};
// Counter.propTypes = {
//     caption: PropTypes.string.isRequested,
//     initValue: PropTypes.number
// };
export default ControlPanel;