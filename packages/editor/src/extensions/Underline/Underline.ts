import Underline, { UnderlineOptions } from '@tiptap/extension-underline';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { MdiFormatUnderline } from '../../icons/UnderlineCode';
import { BaseOptions } from '../../types';

export default Underline.extend<UnderlineOptions & BaseOptions>({
  name: 'underline',
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return {
          priority: 60,
          component: CommonToolBar,
          props: {
            editor,
            title: 'Underline',
            Icon: MdiFormatUnderline,
            isActive: () => editor.isActive('underline'),
            action: () => {
              editor.chain().focus().toggleUnderline().run();
            },
          },
        };
      },
    };
  },
});
