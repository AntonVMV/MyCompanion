import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postRequest } from '../../store/thunk/mockApiThunk'

export const NewNote = (props) => {
  const [value, setValue] = useState()
  const dispatch = useDispatch()

  const saveHandler = (event) => {
    event.preventDefault()
    dispatch(postRequest('notes', { text: value }))
    props.setActiveForm(false)
  }

  return (
    <form
      className="note__form form"
      onReset={() => props.setActiveForm(false)}
      onSubmit={saveHandler}
    >
      <textarea className="form__input" type="text" onChange={(e) => setValue(e.target.value)} />
      <div className="form__controls">
        <button type="submit" className="button button__edit">
          Add
        </button>
        <button type="reset" className="button button__delete">
          Cancel
        </button>
      </div>
    </form>
  )
}
