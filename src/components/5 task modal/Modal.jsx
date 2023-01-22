// import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalForm } from './Modal.styled'
import {createPortal} from 'react-dom';

const modalRoot = document.querySelector('#modal-root')


export class Modal extends Component {
  componentDidMount() {
    console.log('modal DID MOUNT');

    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    console.log('modal WILL');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    console.log(e.code)
      if (e.code === "Escape"){
        // console.log('pres Escape')
      this.props.onClose();
  }
  }
  hanleBackdropClick = e => {
    if(e.currentTarget === e.target){
      this.props.onClose();
    }
  }


  render() {
    return createPortal (
      <Overlay onClick={this.hanleBackdropClick}>
        <ModalForm>
          {this.props.children}
          <img src="" alt="" />
        </ModalForm>
      </Overlay>, modalRoot,
    );
  }
}

