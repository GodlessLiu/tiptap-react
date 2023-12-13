import { EditorContent } from '@tiptap/react';
import Header from './Header';
import { EditorProps, Language } from '../types';
import Footer from './Footer';
import SelfBubbleMenu from './BubbleMenu';
import I18nContext from './i18n';
import { data } from '../local/data';
import { useState } from 'react';
import { UilLetterEnglishA } from '../icons/En-US';
import { UilLetterChineseA } from '../icons/Zh-CN';
import useLocalStorage from '../utils/UseLocalSorage';
export default (props: EditorProps) => {
  const { editor, showBubbleItem = false, I18n = true } = props;
  const [language, setLangauge] = useState<Language>(
    (useLocalStorage.getLocal('language') as Language) || 'en-US'
  );
  function changeLanguage(language: Language) {
    useLocalStorage.setLocal('language', language);
    setLangauge(language);
  }
  function IconLanguageShow(language: Language) {
    switch (language) {
      case 'en-US':
        return <UilLetterEnglishA onClick={() => changeLanguage('zh-CN')} />;
      case 'zh-CN':
        return <UilLetterChineseA onClick={() => changeLanguage('en-US')} />;
      default:
        return <UilLetterChineseA onClick={() => changeLanguage('en-US')} />;
    }
  }
  return (
    <I18nContext.Provider value={data[language]}>
      <div
        className="rich-text-editor"
        onClick={() => editor.chain().focus().run()}
      >
        {editor ? (
          <>
            <Header editor={editor}>
              {I18n ? <>{IconLanguageShow(language)}</> : null}
            </Header>
            {showBubbleItem ? <SelfBubbleMenu editor={editor} /> : null}
            <EditorContent className="markdown-body" editor={editor} />
            <Footer />
          </>
        ) : null}
      </div>
    </I18nContext.Provider>
  );
};
