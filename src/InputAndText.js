import React, { Component } from 'react';

class InputAndText extends Component {
    constructor(props) {
        super(props);
        this.state = { inputVal: '' };
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillMount() {
        console.log("componentWillMount");
        window.addEventListener('keydown', this.handleKeyboardInput.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyboardInput);

    }
    handleKeyboardInput(e) {
        console.log(this.state.inputVal);
        const charCode = e.keyCode;
        //for delete
        if (charCode == 8) {
            var str = this.state.inputVal.substring(0, this.state.inputVal.length - 1);
            this.setState({ inputVal: str });
        }
        //for characters input [a-zA-Z] and whitspace
        if (charCode >= 65 && charCode <= 90 || charCode == 32) {
            this.setState({ inputVal: this.state.inputVal + e.key });
        }
    };



    render() {
        return (<div>
            <p>you just typed: {this.state.inputVal} </p>
        </div>);
    }
}

export default InputAndText;