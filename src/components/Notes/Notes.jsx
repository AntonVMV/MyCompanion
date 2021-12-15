import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getRequest, deleteRequest } from "../../store/thunk/mockApiThunk";
import "./style.css";
import { NewNote } from "./NewNote";
import { Note } from "./Note";
import { EditNote } from "./EditNote";

export const Notes = () => {
    const dispatch = useDispatch();
    const { notes, loading } = useSelector(store => store.noteReducer);
    const [isActiveForm, setActiveForm] = useState(false);
    const [edit, setEdit] = useState();

    useEffect(() => {
        dispatch(getRequest('notes'));
    }, []);

    const deleteHandler = (id) => {
        dispatch(deleteRequest('notes', id));
    }

    return (
        <div className='notes__container'>
            {loading && <div className='loading'>Loading...</div>}
            <button className='button button__create' onClick={() => setActiveForm(!isActiveForm)}>Add New Note</button>
            {isActiveForm && <NewNote setActiveForm={setActiveForm} />}
            <ul className='notes__list'>
                {notes && notes.map(item => {
                    return (
                        <li key={item.id} className={edit === item.id ? 'notes__item edit' : 'notes__item'}>
                            {edit !== item.id ?
                                <Note id={item.id} text={item.text} setEdit={setEdit} deleteHandler={deleteHandler} /> :
                                <EditNote id={item.id} setEdit={setEdit} text={item.text} />
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}