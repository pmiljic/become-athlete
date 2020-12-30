import { InputHTMLAttributes, FC, ComponentType } from 'react'

import { useField } from 'formik'

import {
  Input as NextInput,
  TextArea,
  Error
} from './Input.styles'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isTextArea?: boolean
  name: string
}

const Input: FC<Props> = ({ label, isTextArea, name, ...props }) => {

  const InputType: ComponentType = isTextArea ? TextArea : NextInput
  const [field, meta] = useField(name)

  return (
    <>
      <label htmlFor={props.id || name}>{label}
        {meta.touched && meta.error ? (
          <Error>{meta.error}</Error>
        ) : null}
      </label>
      <InputType
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...field}
        {...props}
      />
    </>
  )
}

export default Input
