import { type Helper as H } from '../types';
import { number2Arab } from '../utils/number2Arab';

const Helper: H = [
  {
    command: 'Blod',
    options: ['Control', 'B'],
  },
  {
    command: 'Italic',
    options: ['Control', 'I'],
  },
  {
    command: 'Underline',
    options: ['Control', 'U'],
  },
  {
    command: 'StrikeThrough',
    options: ['Control', 'Shift', 'X'],
  },
  {
    command: 'Code',
    options: ['Control', 'E'],
  },
  {
    command: 'normal text',
    options: ['Control', 'Alt', '0'],
  },
  ...[1, 2, 3, 4, 5, 6].map((i) => {
    return {
      command: `heading ${number2Arab(i)}`,
      options: ['Control', 'Alt', i.toString()],
    };
  }),
  {
    command: 'Ordered list',
    options: ['Control', 'Shift', '7'],
  },
  {
    command: 'Bullet list',
    options: ['Control', 'Shift', '8'],
  },
  {
    command: 'Task list',
    options: ['Control', 'Shift', '9'],
  },
  {
    command: 'Blockquote',
    options: ['Control', 'Shift', 'B'],
  },
  {
    command: 'Left Align',
    options: ['Control', 'Shift', 'L'],
  },
  {
    command: 'Center Align',
    options: ['Control', 'Shift', 'E'],
  },
  {
    command: 'Right Align',
    options: ['Control', 'Shift', 'R'],
  },
  {
    command: 'Code Block',
    options: ['Control', 'Alt', 'C'],
  },
  {
    command: 'Help',
    options: ['Control', '/'],
  },
];

export default Helper;
