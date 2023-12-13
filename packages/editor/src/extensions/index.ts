import Text from './Text/Text';
import Heading from './Heading/Heading';
import Paragraph from './Paragraph/Paragraph';
import Document from './Document/Document';
import Blockquote from './Blockquote/Blockquote';
import Ul from './Ul/Ul';
import Ol from './Ol/Ol';
import CodeBlock from './CodeBlock/CodeBlock';
import Bold from './Bold/Bold';
import Italic from './Italic/Italic';
import InlineCode from './InlineCode/InlineCode';
import Underline from './Underline/Underline';
import Image from './Image/Image';
import TextAlign from './TextAlign/TextAlign';
import Link from './Link/Link';
import Strike from './Strike/Strike';
import Placeholder from './Placeholder/Placeholder';
import Horizontal from './Horizontal/Horizontal';
import TaskList from './TaskList/TaskList';
import History from './History/History';
import lowlight from './CodeBlock/lowLight';
import Iframe from './Iframe/Iframe';
const allExtensions = [
  Text,
  Heading,
  Paragraph,
  Document,
  Blockquote,
  Ul,
  Ol,
  CodeBlock.configure({
    lowlight,
  }),
  Bold,
  Italic,
  InlineCode,
  Underline,
  Image.configure({
    allowBase64: true,
    upload: (e: File) => {
      console.log(e);
    },
  }),
  TextAlign.configure({
    types: ['heading', 'paragraph', 'image'],
    alignments: ['left', 'center', 'right'],
  }),
  Link.configure({
    autolink: true,
  }),
  Strike,
  Placeholder.configure({
    placeholder: 'write something ...',
  }),
  Horizontal,
  TaskList,
  History,
  Iframe,
];

export {
  allExtensions,
  Text,
  Heading,
  Paragraph,
  Document,
  Blockquote,
  Ul,
  Ol,
  CodeBlock,
  Bold,
  Italic,
  InlineCode,
  Underline,
  Image,
  TextAlign,
  Link,
  Strike,
  Placeholder,
  Horizontal,
  TaskList,
  History,
  lowlight,
  Iframe,
};
