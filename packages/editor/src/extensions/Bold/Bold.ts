import Bold, { BoldOptions } from '@tiptap/extension-bold';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
export default Bold.extend<BoldOptions>({
  name: 'laf-bold',
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return {
          priority: 60,
          component: CommonToolBar,
          props: {
            editor,
            title: 'bold',
            isActive: () => editor.isActive('laf-bold'),
            action: () => {
              editor.chain().focus().toggleBold().run();
            },
          },
        };
      },
    };
  },
});
