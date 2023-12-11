import BulletList, { BulletListOptions } from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { IcBaselineFormatListBulleted } from '../../icons/BulletList';
export default BulletList.extend<BulletListOptions>({
  name: 'laf-ul',
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return {
          priority: 40,
          component: CommonToolBar,
          props: {
            editor,
            title: 'ul',
            Icon: IcBaselineFormatListBulleted,
            isActive: () => editor.isActive('laf-ul'),
            action: () => {
              editor.chain().focus().toggleBulletList().run();
            },
          },
        };
      },
    };
  },
  addExtensions() {
    return [ListItem];
  },
});
