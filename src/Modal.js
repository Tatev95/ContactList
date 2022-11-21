import { createPortal } from "react-dom";

const Modal = ({ isOppened, children, onClose }) => {
    if (!isOppened) {
        return null
    }
    return createPortal(
        <div className='modalDiv'>
            <div className="overlay"></div>
            <div className="mymodal">
                <div className="mode-div">
                    <span className="close-button" onClick={onClose}>X</span>
                    <div className="modal-content">{children}</div>
                      {/* <h2>Contact with Us</h2>
                    <form>
                        <input type='text' placeholder='enter  your name' />
                        <input type='text' placeholder='enter email address' />
                    </form> */}
                </div>
            </div>
            

        </div>,
        document.getElementById('modal')  //like index.js
    )
}

export default Modal;