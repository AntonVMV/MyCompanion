import "./style.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { deleteRequest, getRequest } from "../../store/thunk/mockApiThunk";


export const ContactBook = () => {
    const { loading, contacts } = useSelector(store => store.contactsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequest('contactBook'))
    }, [])

    const deleteHandler = (id) => {
        dispatch(deleteRequest('contactBook', id))
    }

    return (
        <div className='contacts__container'>
            <Link to='/ContactBook/contact-form'><button className='button button__create'>Add New Contact</button></Link>
            {loading && <div className="loading">Loading...</div>}
            <ul className='contacts__list'>
                {contacts && contacts.map(item => {
                    return (
                        <li key={item.id} className='contacts__item'>
                            <div className="contacts__name">
                                <p className="contacts__item-text">{item.name}</p>
                                <p className="contacts__item-text">{item.lastName}</p>
                            </div>
                            <p className="contacts__item-email">{item.email}</p>
                            <p className="contacts__item-phone">{item.phone}</p>
                            <div className="contacts__item-controls">
                                <Link to={`/ContactBook/contact-form/${item.id}`}>
                                    <button className="button button__icon">
                                        <img className="edit__icon" src="./img/edit-icon.png" alt='edit icon'/>
                                    </button>
                                </Link >
                                <button className="button button__icon" onClick={() => deleteHandler(item.id)}>
                                    <img className="delete__icon" src="./img/delete-icon.png" alt='edit icon'/>
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}