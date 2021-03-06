import React, { Component } from 'react';

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }
  
class Clock extends Component {
constructor(props){
    super(props);   
    this.state = {date:new Date()};
}

componentDidMount() {
   this.timerId=setInterval(
        ()=>this.tick(this.state)
    ,1000);
}

componentWillUnmount() {
    clearInterval(this.timerId);

}

 tick(){
    this.setState({date:new Date()});
}

    render() {  
        return (<div>
            <FormattedDate date={this.state.date}></FormattedDate> 
            </div>);
    }
}

export default Clock;