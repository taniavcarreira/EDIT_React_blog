import React from 'react'
import './dynamicForm.css'

class DynamicForm extends React.Component {
    constructor(props) {
      super(props);
  
      const fieldsNames = props.fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {});
  
      this.state = fieldsNames;
    }
  
    handleChange = (evt) => {
      this.setState({ [evt.target.name]: evt.target.value });
    };
  
    handleSubmit = (evt) => {
      evt.preventDefault();
      this.props.submitFn(this.state);
    };
  
    checkType(field) {
      if (field.type === "text")
        return (
          <input type="text" name={field.name} onChange={this.handleChange} />
        );
      else if (field.type === "password")
        return (
          <input type="password" name={field.name} onChange={this.handleChange} />
        );
      else if (field.type === "textarea")
        return (
          <textarea type="textarea" name={field.name} rows={field.lines} 
          onChange={this.handleChange}>
          </textarea>
        );
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          {this.props.fields.map((field) => this.checkType(field))}
          <input type="submit" />
        </form>
      );
    }
  }
  
export default DynamicForm;