import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types"

const CustomInput = ({ type, id, label, children, ...props }) => {
  return (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input type={type} {...props}>
        {children}
      </Input>
    </FormGroup>
  )
}

export default CustomInput

CustomInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
}

CustomInput.defaultProps = {
  type: '',
  id: '',
  label: ''
}