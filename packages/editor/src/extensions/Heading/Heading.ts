import TiptapHeading, { HeadingOptions } from '@tiptap/extension-heading';
import { PluginKey, Plugin } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { BaseOptions } from '../../types';

const Heading = TiptapHeading.extend<HeadingOptions & BaseOptions>({
  addOptions() {
    let that = this;
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        const levels = that.parent().levels;
        const ToolBarItems = levels.map((level) => {
          return {
            priority: 40,
            component: CommonToolBar,
            props: {
              editor,
              title: `H${level}`,
              isActive: () => editor.isActive('heading', { level }),
              action: () => {
                editor.chain().focus().toggleHeading({ level: level }).run();
              },
            },
          };
        });

        return ToolBarItems;
      },
    };
  },
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('generate-heading-id'),
        props: {
          decorations: (state) => {
            const { doc } = state;
            const decorations: Decoration[] = [];
            doc.descendants((node, pos) => {
              if (node.type.name === 'heading') {
                const id = node.textContent;
                decorations.push(
                  Decoration.node(pos, pos + node.nodeSize, {
                    id,
                  })
                );
              }
            });
            return DecorationSet.create(doc, decorations);
          },
        },
      }),
    ];
  },
});

export default Heading;
