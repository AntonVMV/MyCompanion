import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRequest, deleteRequest } from '../../store/thunk/mockApiThunk'
import './style.css'
import { NewNote } from './NewNote'
import { Note } from './Note'
import { EditNote } from './EditNote'
import { DeleteModal } from '../DeleteModal/DeleteModal'

export const Notes = () => {
  const dispatch = useDispatch()
  const { notes, loading } = useSelector((store) => store.noteReducer)
  const [isActiveForm, setActiveForm] = useState(false)
  const [edit, setEdit] = useState()
  const [deleteItemId, setDeleteItemId] = useState(null)

  useEffect(() => {
    dispatch(getRequest('notes'))
  }, [])

  const deleteHandler = () => {
    dispatch(deleteRequest('notes', deleteItemId))
    setDeleteItemId(null)
  }

  return (
    <div className="notes__container">
      {loading && <div className="loading">Loading...</div>}
      <button className="button button__create" onClick={() => setActiveForm(!isActiveForm)}>
        Add New Note
      </button>
      {isActiveForm && <NewNote setActiveForm={setActiveForm} />}
      <ul className="notes__list">
        {notes &&
          notes.map((item) => {
            return (
              <li key={item.id} className={edit === item.id ? 'notes__item edit' : 'notes__item'}>
                {edit !== item.id ? (
                  <Note
                    id={item.id}
                    text={item.text}
                    setEdit={setEdit}
                    toDelete={setDeleteItemId}
                  />
                ) : (
                  <EditNote id={item.id} setEdit={setEdit} text={item.text} />
                )}
              </li>
            )
          })}
      </ul>
      {deleteItemId && <DeleteModal onAgree={deleteHandler} onCancel={setDeleteItemId} />}
    </div>
  )
}
