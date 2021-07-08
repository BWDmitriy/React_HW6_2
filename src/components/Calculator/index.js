import React from 'react';

function Mult(props) {
  const number = parseFloat(props.userInput);
  const multiplier = parseFloat(props.mult);
      if (Number.isNaN(number)) {
        return '';
      }
      const result = number * multiplier;
      console.log(result.toString());
      return <p>{number} * {multiplier.toString()} is equal to {result.toString()}</p>;
}

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {userInput: ''};
    }
  
    handleChange(e) {
      this.setState({userInput: e.target.value});
    }
    render() {
      const userInput = this.state.userInput;
      return (
        <fieldset>
          <legend>Value to be calculated:</legend>
          <input
            value={userInput}
            onChange={this.handleChange} />
            <Mult userInput={userInput} mult="0.5"/>
            <Mult userInput={userInput} mult="0.05"/>
        </fieldset>
      );
    }
  }

export default Calculator;