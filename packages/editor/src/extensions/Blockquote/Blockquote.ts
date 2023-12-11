import TiptapBlockquote, {
  BlockquoteOptions,
} from '@tiptap/extension-blockquote';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { GrommetIconsBlockQuote } from '../../icons/BlockQuoteIcon';
import { BaseOptions } from '../../types';

export default TiptapBlockquote.extend<BlockquoteOptions & BaseOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return [
          {
            priority: 40,
            component: CommonToolBar,
            props: {
              editor,
              title: 'Blockquote',
              Icon: GrommetIconsBlockQuote,
              isActive: () => editor.isActive('blockquote'),
              action: () => {
                editor.chain().focus().toggleBlockquote().run();
              },
            },
          },
        ];
      },
    };
  },
});
