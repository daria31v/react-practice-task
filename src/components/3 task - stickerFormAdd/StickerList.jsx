import { Sticker } from 'components/3 task - stickerFormAdd/Stiker';
import { Component } from 'react';
import { List } from './StickerList.styled';

export class StickerList extends Component {
  state = {
    selectedIdx: null,
  };

  changeSelected = idx => {
    // ...
  };

  render() {
    const { items, onDelete } = this.props;
    return (
      <List>
        {items.map((item, idx) => (
          <li key={idx}>
            <Sticker sticker={item} onDelete={onDelete} />
          </li>
        ))}
      </List>
    );
  }
}