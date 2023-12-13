import TiptapHeading, { HeadingOptions } from '@tiptap/extension-heading';
import { PluginKey, Plugin } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';
import { Editor } from '@tiptap/react';
import CommonToolBar from '../components/CommonToolBar';
import { BaseOptions } from '../../types';
import { CiHeadingH1 } from '../../icons/H1';
import { CiHeadingH2 } from '../../icons/H2';
import { CiHeadingH3 } from '../../icons/H3';
import { CiHeadingH4 } from '../../icons/H4';
import { CiHeadingH5 } from '../../icons/H5';
import { CiHeadingH6 } from '../../icons/H6';
const Heading = TiptapHeading.extend<HeadingOptions & BaseOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }: { editor: Editor }) {
        return [
          {
            priority: 40,
            component: CommonToolBar,
            props: {
              editor,
              title: `H1`,
              Icon: CiHeadingH1,
              isActive: () => editor.isActive('heading', { level: 1 }),
              action: () => {
                editor.chain().focus().toggleHeading({ level: 1 }).run();
              },
            },
          },
          {
            priority: 40,
            component: CommonToolBar,
            props: {
              editor,
              title: `H2`,
              Icon: CiHeadingH2,
              isActive: () => editor.isActive('heading', { level: 2 }),
              action: () => {
                editor.chain().focus().toggleHeading({ level: 2 }).run();
              },
            },
          },
          {
            priority: 40,
            component: CommonToolBar,
            props: {
              editor,
              title: `H3`,
              Icon: CiHeadingH3,
              isActive: () => editor.isActive('heading', { level: 3 }),
              action: () => {
                editor.chain().focus().toggleHeading({ level: 4 }).run();
              },
            },
          },
          {
            priority: 40,
            component: CommonToolBar,
            props: {
              editor,
              title: `H4`,
              Icon: CiHeadingH4,
              isActive: () => editor.isActive('heading', { level: 4 }),
              action: () => {
                editor.chain().focus().toggleHeading({ level: 4 }).run();
              },
            },
          },
          {
            priority: 40,
            component: CommonToolBar,
            props: {
              editor,
              title: `H5`,
              Icon: CiHeadingH5,
              isActive: () => editor.isActive('heading', { level: 5 }),
              action: () => {
                editor.chain().focus().toggleHeading({ level: 5 }).run();
              },
            },
          },
          {
            priority: 40,
            component: CommonToolBar,
            props: {
              editor,
              title: `H6`,
              Icon: CiHeadingH6,
              isActive: () => editor.isActive('heading', { level: 6 }),
              action: () => {
                editor.chain().focus().toggleHeading({ level: 6 }).run();
              },
            },
          },
        ];
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
