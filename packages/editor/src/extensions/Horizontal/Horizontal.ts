import HorizontalRule, {
  HorizontalRuleOptions,
} from '@tiptap/extension-horizontal-rule';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { MaterialSymbolsHorizontalRule } from '../../icons/HorizontalIcon';
import { BaseOptions } from '../../types';
export default HorizontalRule.extend<HorizontalRuleOptions & BaseOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return [
          {
            priority: 80,
            component: CommonToolBar,
            props: {
              editor,
              title: 'Horizontal',
              Icon: MaterialSymbolsHorizontalRule,
              isActive: () => editor.isActive('horizontalRule'),
              action: () => editor.chain().focus().setHorizontalRule().run(),
            },
          },
        ];
      },
    };
  },
});
