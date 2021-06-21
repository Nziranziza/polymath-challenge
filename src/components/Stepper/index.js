import * as React from "react"

import "./index.scss"

const Stepper = ({ steps }) => {
  return (
    <div className="stepper flex-column">
      {steps.map((step, index) => (
        <div className="stepper-item" key={index}>
          <div className={`${step.status} stepper-item-dot`} href="#">
            {index + 1}
          </div>
          <span className="stepper-item-name">{step.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stepper