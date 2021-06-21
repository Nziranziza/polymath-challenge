import React from "react"

import { Label, Input } from "reactstrap"
import PropTypes from "prop-types"

const Checkbox = ({ label }) => {
  return (
    <Label>
      <Input type="checkbox" />{' '}
      {label}
    </Label>
  )
};

export default Checkbox;

Checkbox.propTypes = {
  label: PropTypes.string
}

Checkbox.defaultProps = {
  label: ''
}