import React from "react"
import PropTypes from "prop-types"
import { FormGroup, Label } from "reactstrap"

import './index.scss';
import Checkbox from '../Checkbox';

const MultipleSelect = ({ 
  label,
  options = []
}) => {
  return (
    <FormGroup className="multiple-select">
      <Label>{label}</Label>
      {options.map((language) => <Checkbox 
      key={language.value} 
      label={language.label}
      />)}
    </FormGroup>
  )
}

export default MultipleSelect

MultipleSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.any)
}

MultipleSelect.defaultProps = {
  label: '',
  options: []
}