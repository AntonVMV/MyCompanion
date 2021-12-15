

export const Note = (props) => {

    return (
        <>
            <p className='note__text'>{props.text}</p>
            <div className='note__controls'>
                <button className='button button__edit' onClick={() => props.setEdit(props.id)}>Edit</button>
                <button className='button button__delete' onClick={() => props.deleteHandler(props.id)}>Delete</button>
            </div>
        </>
    )
}