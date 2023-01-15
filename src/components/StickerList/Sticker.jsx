// import { CardWrapper, Image, Label } from './Sticker.styled';
// import { Component } from 'react';

// export class Sticker extends Component {
//     state = {
//         isOpen: false,
//     }
    
//     toggle = () => {
//         this.setState(prevState => ({
//             isOpen: !prevState.isOpen,
//         }))
//     }

//     render() {
//         const {isOpen} = this.state;
//       const {
//           sticker: { img, label },
//       } = this.props;
    
//     return (
//       <CardWrapper onClick={this.toggle}>
//             <Image src={img} alt={label} />
//             {isOpen && <Label>{label}</Label>}
        
//       </CardWrapper>
//     );
//   }
// }

// 2 task
import { CardWrapper, Image, Label } from './Sticker.styled';

export const Sticker = ({sticker: {img, label}, onSelect, isSelected}) => {
    return (
        <CardWrapper onClick={onSelect}>
            <Image src={img} alt={label} />
            {isSelected === true && <Label>{label}</Label> }
        </CardWrapper>
    )
}
    
