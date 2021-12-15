
export const ContactModal = ({user, onClose}) => {
    const keys = Object.keys(user);

    const outClick = (e) => {
        if(e.target === e.currentTarget){
            onClose(false);
        }
    }

    return (
        <div className="modal__container" onClick={outClick}>
            <ul className="modal__list">
                <div className="modal__header">Contact Info</div>
                {keys.map((key, index) => {
                    if(key === 'id'){
                        return null;
                    }
                    return (
                        <li key={index} className="modal__item">
                            <p className="modal__description">{`${key}: `}</p>
                            {key === 'phone' ? 
                                <a className="modal__text" href={`tel:${user[key]}`}>{user[key]}</a> : 
                                <p className="modal__text">{user[key]}</p>
                            }
                        </li>
                    ) 
                })}
                <button className="button modal__button" onClick={() => onClose(false)}>Ok</button>
            </ul>
        </div>
    )
}