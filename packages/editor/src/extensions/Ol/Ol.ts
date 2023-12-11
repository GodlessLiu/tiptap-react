import OrderList, { OrderedListOptions } from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';

export default OrderList.extend<OrderedListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return {
          priority: 50,
          component: CommonToolBar,
          props: {
            editor,
            title: 'ol',
            isActive: () => editor.isActive('orderedList'),
            action: () => {
              editor.chain().focus().toggleOrderedList().run();
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
