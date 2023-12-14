const content = `<h1>laf-react-editor</h1><p>用于react项目的富文本编辑器，基于 Tiptap。</p><h2>安装</h2><p><code>pnpm i laf-react-editor</code></p><h2>特性</h2><ul><li><p>支持基础的markdown语法</p></li><li><p>支持自定义编辑器的插件</p></li><li><p>支持i18n</p></li></ul><h2>使用</h2><pre><code class="language-javascript">// main.tsx

import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './index.css';

import 'laf-react-editor/dist/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(

  &lt;React.StrictMode&gt;

    &lt;App /&gt;

  &lt;/React.StrictMode&gt;

);

// App.tsx

import { useEditor, RichTextEditor, allExtensions } from 'laf-react-editor';

function App() {

  const editor = useEditor({

    content: '',

    extensions: allExtensions,

  });

  const read = () =&gt; {

    console.log(editor?.getHTML());

  };

  return (

    &lt;&gt;

      &lt;button onClick={() =&gt; read()}&gt;get&lt;/button&gt;

      &lt;div style={{ height: '100vh', width: '80vw', margin: '0 auto' }}&gt;

        &lt;RichTextEditor editor={editor!} /&gt;

      &lt;/div&gt;

    &lt;/&gt;

  );

}

export default App;</code></pre><h2>Github</h2><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/GodlessLiu/tiptap-react">https://github.com/GodlessLiu/tiptap-react</a></p><h2>Readme</h2>`;

export default content;
