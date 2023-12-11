import Italic, { ItalicOptions } from '@tiptap/extension-italic';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { MdiFormatItalic } from '../../icons/ItalicIcon';

export default Italic.extend<ItalicOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return {
          priority: 60,
          component: CommonToolBar,
          props: {
            Icon: MdiFormatItalic,
            editor,
            title: 'italic',
            isActive: () => editor.isActive('italic'),
            action: () => {
              editor.chain().focus().toggleItalic().run();
            },
          },
        };
      },
    };
  },
});
