export function number2Arab(num: number) {
  if (typeof num !== 'number') return num;
  const arab = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];
  return arab[num - 1];
}
