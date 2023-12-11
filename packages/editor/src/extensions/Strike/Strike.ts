import Strike, { StrikeOptions } from '@tiptap/extension-strike';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { MdiFormatStrikethrough } from '../../icons/StrikeIcon';
import { BaseOptions } from '../../types';
export default Strike.extend<StrikeOptions & BaseOptions>({
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
            Icon: MdiFormatStrikethrough,
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
