import React from "react"

import Input from "../Input"
import MultipleSelect from "../MultipleSelect"
import PropTypes from "prop-types"

import "./index.scss"

const FormInput = ({ 
  type, 
  title, 
  label, 
  options,
  required
 }) => {
  const chooseInput = () => {
    switch (type) {
      case "select":
        return (
          <Input type="select" name="select" id="exampleSelect" label={label}>
            {
              options.map((option) => <option>{option}</option>)
            }
          </Input>
        )
      case "multipleSelect":
        return <MultipleSelect label={label} options={options} />
      case "textarea":
        return <Input type="textarea" label={label} />
      default:
        return <Input type={type || "text"} label={label} />
    }
  }

  return (
    <div className="form-input">
      <h6>{title}{
        required && <span className="required-marker">*</span>
      }</h6>
      {chooseInput()}
    </div>
  )
}

export default FormInput

FormInput.propTypes = {
  type: PropTypes.string, 
  title: PropTypes.string, 
  label: PropTypes.string, 
  options: PropTypes.arrayOf(PropTypes.any),
  required: PropTypes.bool
}

FormInput.defaultProps = {
  type: 'text',
  title: '',
  label: '',
  options: [],
  required: false
}