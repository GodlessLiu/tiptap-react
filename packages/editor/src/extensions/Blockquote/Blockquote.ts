import TiptapBlockquote, {
  BlockquoteOptions,
} from '@tiptap/extension-blockquote';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';

export default TiptapBlockquote.extend<BlockquoteOptions>({
  name: 'laf-blockquote',
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
              isActive: () => editor.isActive('laf-blockquote'),
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