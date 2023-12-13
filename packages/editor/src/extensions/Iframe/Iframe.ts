import { Node, mergeAttributes, nodePasteRule } from '@tiptap/react';

export default Node.create({
  name: 'iframe',
  group() {
    return 'block';
  },
  atom: true,
  addAttributes() {
    return {
      ...this.parent?.(),
      src: {
        default: null,
        parseHTML: (element) => ({
          src: element.getAttribute('src'),
        }),
        renderHTML: (attributes) => {
          if (!attributes.src) {
            return {};
          }
          return { src: attributes.src };
        },
      },
      width: {
        default: '100%',
        parseHTML: (element) => {
          return element.getAttribute('width');
        },
        renderHTML(attributes) {
          return {
            width: attributes.width,
          };
        },
      },
      height: {
        default: '300px',
        parseHTML: (element) => {
          const height = element.getAttribute('height');
          return height;
        },
        renderHTML: (attributes) => {
          return {
            height: attributes.height,
          };
        },
      },
    };
  },
  addNodeView() {
    return ({ node }) => {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', node.attrs.src);
      iframe.setAttribute('width', node.attrs.width);
      iframe.setAttribute('height', node.attrs.height);
      return {
        dom: iframe,
      };
    };
  },
  parseHTML() {
    return [
      {
        tag: 'iframe',
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['iframe', mergeAttributes(HTMLAttributes)];
  },

  addPasteRules() {
    return [
      nodePasteRule({
        type: this.type,
        find: /<iframe.*?src="(.*?)".*?<\/iframe>/g,
        getAttributes: (match) => {
          const parse = document
            .createRange()
            .createContextualFragment(match[0]);

          const iframe = parse.querySelector('iframe');

          if (!iframe) {
            return;
          }

          return {
            src: iframe.src,
            width: iframe.width || '100%',
            height: iframe.height || '300px',
          };
        },
      }),
    ];
  },
  // addProseMirrorPlugins() {
  //   return [
  //     new Plugin({
  //       key: new PluginKey('iframe'),
  //       props: {
  //         handlePaste: (view, event: ClipboardEvent, slice) => {
  //           // 处理粘贴事件
  //           const tr = view.state.tr;

  //           // 将粘贴的内容插入到当前光标位置
  //           tr.replaceSelection(slice);

  //           // 在每个段落的末尾插入换行符
  //           tr.doc.descendants((node, pos) => {
  //             if (node.isTextblock) {
  //               tr.insertText(
  //                 '</br>',
  //                 pos + node.nodeSize - 1,
  //                 pos + node.nodeSize - 1
  //               );
  //             }
  //           });

  //           // 应用变更
  //           view.dispatch(tr);

  //           // 阻止默认粘贴行为
  //           return true;
  //         },
  //       },
  //     }),
  //   ];
  // },
});
