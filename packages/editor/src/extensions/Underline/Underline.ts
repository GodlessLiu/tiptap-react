import Underline, { UnderlineOptions } from '@tiptap/extension-underline';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { MdiFormatUnderline } from '../../icons/UnderlineCode';

export default Underline.extend<UnderlineOptions>({
  name: 'laf-underline',
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return {
          priority: 60,
          component: CommonToolBar,
          props: {
            editor,
            title: 'underline',
            Icon: MdiFormatUnderline,
            isActive: () => editor.isActive('laf-underline'),
            action: () => {
              editor.chain().focus().toggleUnderline().run();
            },
          },
        };
      },
    };
  },
});
