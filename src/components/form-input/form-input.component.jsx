import React from 'react'
import { Input, FormInputLabel, Group } from './form-input.style'

const FormInput = ({ label, inputProps }) => {
  return (
    <Group>
      <Input {...inputProps} />
      {label && (
        <FormInputLabel shrink={inputProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput
