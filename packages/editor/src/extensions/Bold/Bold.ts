import Bold, { BoldOptions } from '@tiptap/extension-bold';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { MaterialSymbolsFormatBoldRounded } from '../../icons/BoldIcon';
import { BaseOptions } from '../../types';
export default Bold.extend<BoldOptions & BaseOptions>({
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
            Icon: MaterialSymbolsFormatBoldRounded,
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
