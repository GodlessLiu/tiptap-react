import { EditorContent } from '@tiptap/react';
import Header from './Header';
import { EditorProps } from '../types';
import Footer from './Footer';
import SelfBubbleMenu from './BubbleMenu';
export default (props: EditorProps) => {
  const { editor, showBubbleItem = false } = props;
  return (
    <>
      <div
        className="rich-text-editor"
        onClick={() => editor.chain().focus().run()}
      >
        {editor ? (
          <>
            <Header editor={editor} />
            {showBubbleItem ? <SelfBubbleMenu editor={editor} /> : null}
            <EditorContent className="markdown-body" editor={editor} />
            <Footer />
          </>
        ) : null}
      </div>
    </>
  );
};
