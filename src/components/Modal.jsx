import React from 'react';
import Input from './Input';

const Modal = (props) => {
    return (
        <div className="Modal">
            <form
                onSubmit={props.onSubmit}
                className="ModalForm">
                <Input
                    id="name"
                    type="text"
                    placeholder="Sonya Moisset" />
                <Input
                    id="username"
                    type="email"
                    placeholder="sonya.moisset@gmail.com" />
                <Input
                    id="password"
                    type="password"
                    placeholder="password" />
                <button>
                    Log in <i className="fa fa-fw fa-chevron-right"></i>
                </button>
            </form>
        </div>
    )
}

export default Modal;