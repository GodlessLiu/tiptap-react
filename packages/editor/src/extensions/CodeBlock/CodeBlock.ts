import CodeBlock, { CodeBlockOptions } from '@tiptap/extension-code-block';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { MdiCodeBracesBox } from '../../icons/CodeBlockIcon';
export default CodeBlock.extend<CodeBlockOptions>({
  name: 'laf-code-block',
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
            isActive: () => editor.isActive('laf-code-block'),
            action: () => {
              editor.chain().focus().toggleCodeBlock().run();
            },
          },
        };
      },
    };
  },
});
