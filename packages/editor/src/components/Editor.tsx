import { EditorContent } from '@tiptap/react';
import Header from './Header';
import { EditorProps } from '../types';
import Footer from './Footer';

export default (props: EditorProps) => {
  return (
    <>
      <div
        className="rich-text-editor"
        onClick={() => props.editor.chain().focus().run()}
      >
        {props.editor ? (
          <>
            <Header editor={props.editor} />
            <EditorContent className="markdown-body" editor={props.editor} />
            <Footer />
          </>
        ) : null}
      </div>
    </>
  );
};
