import { BubbleItemProps } from '../../types';

import { useContext } from 'react';
import I18nContext from '../../components/i18n';
import WithToolTip from '../../components/WithToolTip';
const CommonToolBar = (props: BubbleItemProps) => {
  const { title, action, isActive, Icon } = props;

  const data = useContext(I18nContext)!;
  const forkData = data[title!];

  return (
    <>
      <span
        onClick={() => {
          action!();
        }}
        className={`${isActive!() ? 'is-active' : ''} mx-1`}
      >
        <WithToolTip title={forkData}>{Icon ? <Icon /> : null}</WithToolTip>
      </span>
    </>
  );
};

export default CommonToolBar;
