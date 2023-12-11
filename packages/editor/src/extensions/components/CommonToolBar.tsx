import { BubbleItemProps } from '../../types';

const CommonToolBar = (props: BubbleItemProps) => {
  const { title, action, isActive, Icon } = props;

  return (
    <>
      <span
        onClick={() => {
          action!();
        }}
        className={`${isActive!() ? 'is-active' : ''} mx-1`}
      >
        {Icon ? <Icon /> : title}
      </span>
    </>
  );
};

export default CommonToolBar;
