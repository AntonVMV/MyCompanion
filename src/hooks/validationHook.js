import { useState } from 'react'

export const useValidation = (values) => {
  const [phone, setPhone] = useState()
  const [email, setEmailError] = useState()

  const checkErrors = () => {
    for (let value in values) {
      switch (value) {
        case 'phone':
          const numberRegular = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
          values[value] && !numberRegular.test(values[value])
            ? setPhone('Incorrect number')
            : setPhone(null)
          break

        case 'email':
          const emailReg =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          values[value] && !emailReg.test(values[value])
            ? setEmailError('Incorrect e-mail')
            : setEmailError(null)
          break
        default:
          break
      }
    }
  }
  return {
    phone,
    email,
    checkErrors,
  }
}
