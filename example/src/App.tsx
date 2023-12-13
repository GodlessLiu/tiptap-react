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
      {/* <button onClick={() => changeLanguage('en-US')}>en-US</button>
      <button
        onClick={() => changeLanguage('zh-CN')}
        style={{ margin: '10px' }}
      >
        zh-CN
      </button> */}
      <button onClick={() => read()}>get</button>
      <div style={{ height: '100vh', width: '80vw', margin: '0 auto' }}>
        <RichTextEditor editor={editor!} I18n={true} />
      </div>
    </>
  );
}

export default App;
