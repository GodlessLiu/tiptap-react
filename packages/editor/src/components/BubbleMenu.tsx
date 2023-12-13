import { BubbleMenu } from '@tiptap/react';
import { Editor } from '@tiptap/react';

export default function SelfBubbleMenu({ editor }: { editor: Editor }) {
  return (
    <BubbleMenu
      className="menu"
      editor={editor}
      tippyOptions={{ duration: 100 }}
    >
      <div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          strike
        </button>
      </div>
    </BubbleMenu>
  );
}
