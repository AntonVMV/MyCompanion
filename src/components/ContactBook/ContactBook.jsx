import './style.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteRequest, getRequest } from '../../store/thunk/mockApiThunk'
import { ContactModal } from './ContactModal'

export const ContactBook = () => {
  const { loading, contacts } = useSelector((store) => store.contactsReducer)
  const dispatch = useDispatch()
  const [isModal, setModal] = useState(null)

  useEffect(() => {
    dispatch(getRequest('contactBook'))
  }, [])

  const deleteHandler = (e, id) => {
    e.stopPropagation()
    dispatch(deleteRequest('contactBook', id))
  }

  return (
    <div className="contacts__container">
      <Link to="/ContactBook/contact-form">
        <button className="button button__create">Add New Contact</button>
      </Link>
      {loading && <div className="loading">Loading...</div>}
      {isModal && <ContactModal user={isModal} onClose={setModal} />}
      <ul className="contacts__list">
        {contacts &&
          contacts.map((item) => {
            return (
              <li key={item.id} className="contacts__item" onClick={() => setModal(item)}>
                <div className="contacts__name">
                  <p className="contacts__item-text">{item.name}</p>
                  <p className="contacts__item-text">{item.lastName}</p>
                </div>
                <p className="contacts__item-email">{item.email}</p>
                <p className="contacts__item-phone">{item.phone}</p>
                <div className="contacts__item-controls">
                  <Link to={`/ContactBook/contact-form/${item.id}`}>
                    <button className="button button__icon">
                      <img className="edit__icon" src="./img/edit-icon.png" alt="edit icon" />
                    </button>
                  </Link>
                  <button
                    className="button button__icon"
                    onClick={(e) => deleteHandler(e, item.id)}
                  >
                    <img className="delete__icon" src="./img/delete-icon.png" alt="edit icon" />
                  </button>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
