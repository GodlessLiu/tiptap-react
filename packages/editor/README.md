# @laf/richtext-editor
用于react项目的富文本编辑器，基于 Tiptap。

## 安装
`pnpm i laf-react-editor`

## 使用
```typescript
// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import 'laf-react-editor/dist/style.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// App.tsx
import { useEditor, RichTextEditor, allExtensions } from 'laf-react-editor';

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
```


## Github
https://github.com/GodlessLiu/tiptap-react