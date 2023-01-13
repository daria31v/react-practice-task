import React from 'react';
// import PropTypes from 'prop-types'
import './Dropdown.css';

// export class Dropdown extends React.Component {
//     state = {
//         visible: false,
//     };
//     show = () => {
//         this.setState({ visible: true });
// }
// hide = () => {
//         this.setState({ visible: false });
// }
//     render() {
//         return (
//             <div className='Dropdown'>
//                 <button type='button' className='Dropdown__toggle' onClick={this.show}>
//                     Show!
//                 </button>
//                 <button type='button' className='Dropdown__toggle' onClick={this.hide}>
//                     Hide!
//                 </button>
//                 {this.state.visible && (<div className='Dropdown__menu'>Dropdown Menu</div>)}
//             </div>
//         );
//     }
// }

export class Dropdown extends React.Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'Hide!' : 'Show!'}
        </button>

        {visible && (
          <div className="Dropdown__menu">Dropdown Menu</div>
        )}
      </div>
    );
  }
}
