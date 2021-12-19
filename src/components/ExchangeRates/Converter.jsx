import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getFinanceRequest } from '../../store/thunk/financeThunk'
import { ConverterDropdown } from './ConverterDropdown'
import './style.css'

export const Converter = () => {
  const dispatch = useDispatch()
  const { finance } = useSelector((store) => store.financeReducer)
  const [firstField, setFirstField] = useState({ cur: 'USD', value: '' })
  const [secondField, setSecondField] = useState({ cur: 'EUR', value: '' })

  useEffect(() => {
    dispatch(getFinanceRequest())
  }, [])

  useEffect(() => {
    if (finance) {
      const result =
        (finance[firstField.cur].sale / finance[secondField.cur].sale) * firstField.value
      setSecondField({ ...secondField, value: result.toFixed(2) })
    }
  }, [firstField, secondField.cur])

  const inputHandler = (value) => {
    const res = value.replace(/^0+/, '0')
    setFirstField({ ...firstField, value: res })
  }

  return (
    <>
      <div className="converter__input">
        {finance && (
          <ConverterDropdown
            items={Object.keys(finance)}
            onInput={setFirstField}
            defaultValue={firstField}
          >
            <input
              type="number"
              className="input__field"
              value={firstField.value}
              onChange={(e) => inputHandler(e.target.value)}
            />
          </ConverterDropdown>
        )}
      </div>
      <img src="./img/arrows.png" alt="convert-icon" className="convert__icon" />
      <div className="converter__input">
        {finance && (
          <ConverterDropdown
            items={Object.keys(finance)}
            onInput={setSecondField}
            defaultValue={secondField}
          >
            <input disabled value={secondField.value} className="input__field" />
          </ConverterDropdown>
        )}
      </div>
    </>
  )
}
