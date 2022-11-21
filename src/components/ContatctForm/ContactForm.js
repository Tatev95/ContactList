import React, { Component } from "react";

import logo from '../../assets/images/images.png';
import ThemeContext from '../ThemContext';
import Modal from "../../Modal";
import useLocalStorage from "../../useLocalStorage";


class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    this.myFormRef = React.createRef();
    this.state = {
      name: "",
      surname: "",
      phone: "",
      isModalOpened: false

    }
  }


  handleClick = () => {
    const bg = this.context

    // with refs

    // if (this.myRef.current.style.backgroundColor == bg) {
    //   this.myRef.current.style.backgroundColor = 'white'
    //   this.myRef.current.style.color = bg
    // } else {
    //   this.myRef.current.style.backgroundColor = bg
    //   this.myRef.current.style.color = 'white'
    // }

    // this.myRef.current.style.height = '100%'

    if (document.body.style.backgroundColor == bg) {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = bg
      this.myFormRef.current.style.border = '2px solid gray'

    } else {
      document.body.style.backgroundColor = bg
      document.body.style.color = 'white'
      this.myFormRef.current.style.border = '2px solid white'
    }


  }


  handleChangeForm = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }


  handleFormSubmit = (ev) => {
    ev.preventDefault();

    const { name, surname, phone } = this.state;
    const { onAdd, contacts } = this.props;

    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) {
      return
    }

    // if (name, surname, !phone) {
    //   // this.setState({...this.state,  phone: this.state.phone + ',' + phone})
    //   // onAdd({ id: new Date().getSeconds(), name, surname, phone: phone + "," + phone })
    //   // onAdd({...this.state, phone: phone + "," + phone })

    // }
    else {
      onAdd({ id: new Date().getSeconds(), name, surname, phone })

    }

  }

  validateForm = () => {
    const { name, surname, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !surname || !phone) {
      alert("Fill in required fields!");
      return false
    }
    return onCheckUnique(name)
  }

  render() {
    const { name, surname, phone, isModalOpened } = this.state;
    const bg = this.context
    return (
      <div>
        <h2>Contact Form</h2>
        <img src={logo} className="logo" alt="logo" />
        <div ref={this.myRef}>
          <form onSubmit={this.handleFormSubmit} ref={this.myFormRef} className='contactForm'>
            <input type="text" name="name" placeholder="Input your name" value={name} onChange={this.handleChangeForm} />
            <input type="text" name="surname" placeholder="Input your surname" value={surname} onChange={this.handleChangeForm} />
            <input type="tel" name="phone" placeholder="Input your phone number" value={phone} onChange={this.handleChangeForm} />
            <button type="submit" className="but">Add contact</button>
          </form>
          <button onClick={this.handleClick} className='mode'>Change mode</button>
          <h2>Enter your data</h2>
        </div>


        {/* <button onClick={this.openModal} className='open'>Open Modal</button>
        <div>
          <Modal isOppened={isModalOpened} onClose={() => { this.setState({ isModalOpened: false }) }}>
            <h2>Contact with Us</h2>
            <form>
              <input type='text' placeholder='enter  your name' />
              <input type='text' placeholder='enter email address' />
            </form>
          </Modal>

        </div> */}
      </div>
    )
  }
}
ContactForm.contextType = ThemeContext


export default ContactForm    