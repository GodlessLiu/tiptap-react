import CodeBlockLowlight, {
  CodeBlockLowlightOptions,
} from '@tiptap/extension-code-block-lowlight';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { MdiCodeBracesBox } from '../../icons/CodeBlockIcon';
import { BaseOptions } from '../../types';
export default CodeBlockLowlight.extend<CodeBlockLowlightOptions & BaseOptions>(
  {
    addOptions() {
      return {
        ...this.parent?.(),
        getToolbarItems({ editor }: { editor: Editor }) {
          return {
            priority: 60,
            component: CommonToolBar,
            props: {
              editor,
              Icon: MdiCodeBracesBox,
              title: 'codeBlock',
              isActive: () => editor.isActive('code-block'),
              action: () => {
                editor.chain().focus().toggleCodeBlock().run();
              },
            },
          };
        },
      };
    },
  }
);
