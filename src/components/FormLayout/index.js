import React from "react"
import { Form, Button } from "reactstrap"
import PropTypes from "prop-types"

import "./index.scss"

const FormLayout = ({
  title,
  description,
  children,
  hasPrev,
  hasNext,
  onNext,
  onPrev,
  ...props
}) => {
  return (
    <div className="form-layout">
      <h3>{title}</h3>
      <span>{description}</span>
      <Form {...props}>
        {children}
        <div className="form-buttons">
          {hasPrev && (
            <Button type="button" color="secondary" onClick={onPrev}>
              Previous
            </Button>
          )}
          {hasNext && (
            <Button type="button" color="primary" onClick={onNext}>
              Next
            </Button>
          )}
          {!hasNext && (
            <Button type="submit" color="primary">
              Submit
            </Button>
          )}
        </div>
      </Form>
    </div>
  )
}

export default FormLayout;

FormLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  hasPrev: PropTypes.bool,
  hasNext: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func
}

FormLayout.defaultProps = {
  title: '',
  description: '',
  hasNext: false,
  hasPrev: false,
  onNext: () => {},
  onPrev: () => {}
}