import { useEditor, RichTextEditor, allExtensions } from 'laf-react-editor';

function App() {
  const editor = useEditor({
    content: '<p>hello world</p>',
    extensions: allExtensions,
  });

  const read = () => {
    console.log(editor?.getHTML());
  };

  return (
    <>
      <button onClick={() => read()}>get</button>
      <div style={{ height: '100vh', width: '80vw', margin: '0 auto' }}>
        <RichTextEditor
          editor={editor!}
          I18n={true}
          styles={{ fontSize: '1.5rem' }}
        />
      </div>
    </>
  );
}

export default App;
