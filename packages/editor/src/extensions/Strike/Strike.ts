import Strike, { StrikeOptions } from '@tiptap/extension-strike';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
export default Strike.extend<StrikeOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return {
          priority: 60,
          component: CommonToolBar,
          props: {
            editor,
            title: 'strike',
            isActive: () => editor.isActive('strike'),
            action: () => {
              editor.chain().focus().toggleStrike().run();
            },
          },
        };
      },
    };
  },
});
