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
import WithToolTip from './WithToolTip';
import Help from './Help';
export default (props: EditorProps) => {
  const {
    editor,
    showBubbleItem = false,
    I18n = true,
    styles = {},
    showFooter = false,
    showHelper = true,
  } = props;
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
        return (
          <WithToolTip title="英文模式">
            <UilLetterEnglishA onClick={() => changeLanguage('zh-CN')} />
          </WithToolTip>
        );
      case 'zh-CN':
        return (
          <WithToolTip title="中文模式">
            <UilLetterChineseA onClick={() => changeLanguage('en-US')} />
          </WithToolTip>
        );
      default:
        return (
          <WithToolTip title="中文模式">
            <UilLetterChineseA onClick={() => changeLanguage('en-US')} />
          </WithToolTip>
        );
    }
  }

  return (
    <I18nContext.Provider value={data[language]}>
      <div
        className="rich-text-editor"
        style={{ ...styles }}
        onClick={() => editor.chain().focus().run()}
      >
        {editor ? (
          <>
            <Header editor={editor}>
              <div className="flex">
                {showHelper && <Help />}
                {I18n ? <>{IconLanguageShow(language)}</> : null}
              </div>
            </Header>
            {showBubbleItem ? <SelfBubbleMenu editor={editor} /> : null}
            <EditorContent className="markdown-body" editor={editor} />
            {showFooter ? <Footer /> : null}
          </>
        ) : null}
      </div>
    </I18nContext.Provider>
  );
};
