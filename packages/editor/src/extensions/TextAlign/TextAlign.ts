import TextAlign, { TextAlignOptions } from '@tiptap/extension-text-align';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import {
  MaterialSymbolsAlignHorizontalLeft,
  MaterialSymbolsAlignCenter,
  MaterialSymbolsAlignHorizontalRight,
} from '../../icons/TextAlign';

export default TextAlign.extend<TextAlignOptions>({
  name: 'laf-text-align',
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return [
          {
            priority: 60,
            component: CommonToolBar,
            props: {
              editor,
              title: 'left',
              Icon: MaterialSymbolsAlignHorizontalLeft,
              isActive: () => editor.isActive({ textAlign: 'left' }),
              action: () => {
                editor.chain().focus().setTextAlign('left').run();
              },
            },
          },
          {
            priority: 60,
            component: CommonToolBar,
            props: {
              editor,
              title: 'left',
              Icon: MaterialSymbolsAlignCenter,
              isActive: () => editor.isActive({ textAlign: 'center' }),
              action: () => {
                editor.chain().focus().setTextAlign('center').run();
              },
            },
          },
          {
            priority: 60,
            component: CommonToolBar,
            props: {
              editor,
              title: 'right',
              Icon: MaterialSymbolsAlignHorizontalRight,
              isActive: () => editor.isActive({ textAlign: 'right' }),
              action: () => {
                editor.chain().focus().setTextAlign('right').run();
              },
            },
          },
        ];
      },
    };
  },
});
