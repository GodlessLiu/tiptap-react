import { BubbleItemProps } from '../../types';

const CommonToolBar = (props: BubbleItemProps) => {
  const { title, action, isActive } = props;

  return (
    <>
      <span
        onClick={() => {
          action!();
        }}
        className={`${isActive!() ? 'is-active' : ''} mx-1`}
      >
        {title}
      </span>
    </>
  );
};

export default CommonToolBar;
