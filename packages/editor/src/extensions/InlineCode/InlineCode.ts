import InlineCode, { CodeOptions } from '@tiptap/extension-code';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { IcOutlineCode } from '../../icons/InlineCodeIcon';
import { BaseOptions } from '../../types';

export default InlineCode.extend<CodeOptions & BaseOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return {
          priority: 60,
          component: CommonToolBar,
          props: {
            editor,
            title: 'InlineCode',
            Icon: IcOutlineCode,
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
