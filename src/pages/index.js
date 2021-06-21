import React, { useState } from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import FormLayout from "../components/FormLayout"
import { questonaire } from "../constant/mocks"
import FormInput from "../components/FormInput"
import Stepper from "../components/Stepper"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const { title, description, questions } = questonaire[currentStep]

  /**
   * @description return the status of step based on the currentStep
   * This is for demonstration purpose, normally we should track form completion
   * for each step
   * @param {number} index 
   * @returns {string} status
   */
  const getStatus = index => {
    if (index < currentStep) {
      return "completed"
    }
    if (index === currentStep) {
      return "inprogress"
    }
    return "pending"
  }

  const onNext = () => {
    if(currentStep >= questonaire.length - 1) {
      return;
    }
    setCurrentStep(currentStep + 1)
  }

  const onPrev = () => {
    if(currentStep <= 0) {
      return;
    }
    setCurrentStep(currentStep - 1)
  }

  return (
    <Layout>
      <Seo title={title} description={description} />
      <div>
        <FormLayout
          title={title}
          description={description}
          hasPrev={currentStep > 0}
          hasNext={currentStep < questonaire.length - 1}
          onNext={onNext}
          onPrev={onPrev}
        >
          <ul>
            {questions.map(question => (
              <li>
                <FormInput
                  type={question.type}
                  label={question.description}
                  title={question.title}
                  options={question.options}
                  required={question.required}
                />
              </li>
            ))}
          </ul>
        </FormLayout>
      </div>
      <Stepper
        steps={questonaire.map((category, index) => ({
          name: category.title,
          status: getStatus(index),
        }))}
      />
    </Layout>
  )
}

export default IndexPage
