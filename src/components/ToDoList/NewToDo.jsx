import { useState } from "react";
import { useDispatch } from "react-redux";
import { postRequest } from "../../store/thunk/mockApiThunk";


export const NewToDo = (props) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(postRequest('toDoList', {text: value.text, deadline: value.deadline, done: false }))
        props.setInput(false);
    }

    const resetHandler = () => {
        props.setInput(false);
    }

    return (
        <form className="todo__form" onSubmit={submitHandler} onReset={resetHandler}>
            <textarea type='text' className="todo__input" onChange={(e) => setValue({...value, text: e.target.value})} required/>
            <label htmlFor='todo_date' className="todo__label">Set deadline:</label>
            <input type='date' id='todo_date' className="todo__date" onChange={(e) => setValue({...value, deadline: e.target.value})} required/>
            <div className='input__controls'>
                <button type='submit' className='button button__edit'>Add</button>
                <button type='reset' className='button button__delete'>Cancel</button>
            </div>
        </form>
    )
}