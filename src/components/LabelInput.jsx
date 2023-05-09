import React from 'react'
import { CepForm } from './CepForm'

export const LabelInput = (props) => {

  const name = props.name.toLowerCase()
  return (
    <div className={`col-md-${props.width}`}>
      <label 
        htmlFor={name} 
        className="form-cep">
         {props.name}
      </label>

      <input 
       type="text" 
       className="form-control"
       id={name}
       placeholder={`Digite: ${props.name}`}
       value={name.props}
          />
    </div>    
  )
}
