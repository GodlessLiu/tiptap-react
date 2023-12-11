import Image, { ImageOptions } from '@tiptap/extension-image';
import { PluginKey, Plugin } from '@tiptap/pm/state';
import { ImageExtraOptions } from '../../types';

export default Image.extend<ImageOptions & ImageExtraOptions>({
  addAttributes() {
    return {
      ...this.parent?.(),
      style: {
        default: undefined,
        parseHTML() {
          return {
            style: 'margin: 0 auto; display: block;',
          };
        },
        renderHTML() {
          return {
            style: 'margin: 0 auto; display: block;',
          };
        },
      },
    };
  },
  addProseMirrorPlugins() {
    const editor = this.editor;
    const upload = this.options.upload;

    return [
      new Plugin({
        key: new PluginKey('image'),
        props: {
          handlePaste: (view, event: ClipboardEvent) => {
            const types = Array.from(event.clipboardData?.types || []);
            if (['text/plain', 'text/html'].includes(types[0])) {
              return;
            }
            const images = Array.from(event.clipboardData?.items || [])
              .map((item) => {
                return item.getAsFile();
              })
              .filter((file) => {
                return file && file.type.startsWith('image/');
              }) as File[];

            if (images.length === 0) {
              return;
            }
            images.forEach((image) => {
              const Reader = new FileReader();
              Reader.onload = function (e) {
                if (upload) {
                  upload(image);
                }
                editor
                  .chain()
                  .focus()
                  .setImage({
                    src: e.target?.result as string,
                  })
                  .run();
              };
              Reader.readAsDataURL(image);
            });
            event.preventDefault();
          },
        },
      }),
    ];
  },
});
