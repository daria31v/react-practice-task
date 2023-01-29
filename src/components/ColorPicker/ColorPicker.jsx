// huki
import { useState } from 'react';
import './ColorPicker.css';

export const ColorPicker = ({ options }) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);
  
  const makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };


  const { label } = options[activeOptionIdx];
  

     return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>selected color: {label}</p>
        <div className="ColorPicker__box">
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => setActiveOptionIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }


// класи
// import { Component } from 'react';
// export class ColorPicker extends Component {
//   state = {
//     activeOptionIdx: 3,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//     const optionClasses = ['ColorPicker__option'];
//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }
//     return optionClasses.join(' ');
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];

//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>selected color: {label}</p>
//         <div className="ColorPicker__box">
//           {this.props.options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               className={this.makeOptionClassName(index)}
//               style={{
//                 backgroundColor: color,
//               }}
//               onClick={() => this.setActiveIdx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
