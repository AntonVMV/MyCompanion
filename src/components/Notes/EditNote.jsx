import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { putRequest } from '../../store/thunk/mockApiThunk'

export const EditNote = (props) => {
  const [value, setValue] = useState(props.text)
  const dispatch = useDispatch()

  const acceptHandler = () => {
    dispatch(putRequest('notes', { text: value, id: props.id }))
    props.setEdit(null)
  }

  return (
    <>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} className="note__input" />
      <div className="note__controls">
        <button className="button button__edit" onClick={acceptHandler}>
          Ok
        </button>
        <button className="button button__delete" onClick={() => props.setEdit(null)}>
          Cancel
        </button>
      </div>
    </>
  )
}
