import React from 'react';
import css from '../App/App.module.css'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', textArea: '', selectValue: 'grapefruit', summaryValue: 'Please input your data!', validity: `${css.default}` };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return this.setState({summaryValue: 'Insert your name', validity: `${css.error}`});
    }
    if (/[^a-zA-Z -]/.test(this.state.value)) {
      return this.setState({summaryValue: 'Invalid name', validity: `${css.error}`});
    }
    if (this.state.value.length < 3) {
      return this.setState({summaryValue: `Name needs to be at least three characters`, validity: `${css.error}`});
      
    }
    console.log('submit success');
    return this.setState({summaryValue: 'My name is ' + this.state.value + ' . ' + this.state.textArea + ' My favorite flavor is ' + this.state.selectValue + '.', validity: `${css.default}`}); 
  }
  render() {
    console.log(this.state)

    return <div>
      <form onSubmit={this.handleSubmit}>
        <p><label>
          Name:
          <input type="text" name="value" value={this.state.value} className={this.state.validity} onChange={this.handleInputChange} />
        </label></p>
        <p>
          <label>
            About me:
            <textarea name="textArea" value={this.state.textArea} onChange={this.handleInputChange} />
          </label>
        </p>
        <p>
          <label>
            My favorite flavor:
            <select name="selectValue" value={this.state.selectValue} onChange={this.handleInputChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
        </p>
        <input type="submit" value="Submit" />
        <p>{this.state.summaryValue}</p>
      </form>
    </div>
  }
}

export default NameForm;