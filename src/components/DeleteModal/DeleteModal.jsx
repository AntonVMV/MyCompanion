import './style.css'

export const DeleteModal = () => {
  return (
    <div className="modal__container">
      <div className="modal__content">
        <p>Delete</p>
        <p>Are you sure?</p>
        <button>Ok</button>
        <button>Cancel</button>
      </div>
    </div>
  )
}
