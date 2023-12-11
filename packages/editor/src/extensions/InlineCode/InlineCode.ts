import InlineCode, { CodeOptions } from '@tiptap/extension-code';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';

export default InlineCode.extend<CodeOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return {
          priority: 60,
          component: CommonToolBar,
          props: {
            editor,
            title: 'inlineCode',
            isActive: () => editor.isActive('inlineCode'),
            action: () => {
              editor.chain().focus().toggleCode().run();
            },
          },
        };
      },
    };
  },
});
