
import { StickerList } from '../StickerList/StickerList';
import stickers from '../../stickers.json';

export const App = () => {
  return (
    <>
      {/* // <Layout> */}
      <h1>Example 2</h1>
      <StickerList stickers={stickers} />
      {/* //   </Layout> */}
    </>
  );
};

// може бути відкритим лише один стікер
