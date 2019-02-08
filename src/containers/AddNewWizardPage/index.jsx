import React from 'react'

const AddNewWizardPage = () => {
  return (
    <div>
      <Form />
    </div>
  )
}

class Form extends React.Component {

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={this.handleChange} />
        <input type="text" name="lastName" onChange={this.handleChange} />
        <input type="email" name="email" onChange={this.handleChange} />
      </form>
    );
  };
}

export default Form
