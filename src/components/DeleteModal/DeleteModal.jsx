import './style.css'

export const DeleteModal = ({ onAgree, onCancel }) => {
  return (
    <div className="modal__container">
      <div className="modal__content">
        <div className="modal__head">
          <p>Delete</p>
        </div>
        <div className="modal__body">
          <p className="modal__text">Are you sure?</p>
          <div className="modal__controls">
            <button className="button button__delete" onClick={onAgree}>
              Ok
            </button>
            <button className="button button__edit" onClick={() => onCancel(null)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
