import { useEditor, RichTextEditor, allExtensions } from '@laf/rich-editor';

function App() {
  const editor = useEditor({
    content: '',
    extensions: allExtensions,
  });

  const read = () => {
    console.log(editor?.getHTML());
  };
  return (
    <>
      <button onClick={() => read()}>get</button>
      <div style={{ height: '100vh', width: '80vw', margin: '0 auto' }}>
        <RichTextEditor editor={editor!} />
      </div>
    </>
  );
}

export default App;
