import React, { Component } from 'react';

class InputAndText extends Component {
    constructor(props) {
        super(props);
        this.state = { inputVal: '' };
        //need to bound the function! unless - we will get "undefined" scope params
        // this.handleInput=this.handleInput.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillMount() {
        console.log("componentWillMount");
        
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleInput);

    }
    handleInput = (e) => {
        console.log(e.target.value);
        this.setState({inputVal: e.target.value});
        
    };



    render() {
        return (<div>
              <input type="text" value={this.state.inputVal} onChange={this.handleInput} />
            <p>you just typed: {this.state.inputVal} </p>
        </div>);
    }
}

export default InputAndText;