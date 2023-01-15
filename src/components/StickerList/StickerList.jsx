import { Component } from 'react';
import { Sticker } from './Sticker';
import { List } from './StickerList.styled';
// import stickers from '../../stickers.json'

// 1 task
// export const StickerList = ({ stickers }) => {
//   return (
//     <List>
//       {stickers.map((sticker, idx) => (
//         <li key={idx}>
//           <Sticker sticker={sticker} />
//         </li>
//       ))}
//     </List>
//   );
// };

// 2 task
export class StickerList extends Component {
  state = {
    selectedIdx: null,
  };

  changeIdx = idx => {
    this.setState({
      selectedIdx: idx,
    });
  };

  render() {
    const { stickers } = this.props;
    const {selectedIdx} = this.state;
    return (
      <List>
        {stickers.map((sticker, idx) => (
          <li key={idx}>
            <Sticker sticker={sticker} onSelect={() => this.changeIdx(idx)}  isSelected={selectedIdx === idx}/>
          </li>
        ))}
      </List>
    );
  }
}
