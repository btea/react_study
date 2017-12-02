import React from 'react';

export default class NavTitle extends React.Component{

    $click(e){
        console.log(e.target);
    }
    render(){
        return(
            <li className="title" onClick={(e) => this.$click(e)}>{this.props.text}</li>
        );
    }
}
