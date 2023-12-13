import { useState } from 'react';
import { BubbleItemProps } from '../../types';
import {
  FloatingPortal,
  autoUpdate,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useContext } from 'react';
import I18nContext from '../../components/i18n';
const CommonToolBar = (props: BubbleItemProps) => {
  const { title, action, isActive, Icon } = props;
  const [isOpen, setIsOpen] = useState(false);
  const data = useContext(I18nContext)!;
  const forkData = data[title!];
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [],
  });
  // Event listeners to change the open state
  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  // Role props for screen readers
  const role = useRole(context, { role: 'tooltip' });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);
  return (
    <>
      <span
        onClick={() => {
          action!();
        }}
        className={`${isActive!() ? 'is-active' : ''} mx-1`}
      >
        <FloatingPortal>
          {isOpen && (
            <div
              className="Tooltip"
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
            >
              {forkData}
            </div>
          )}
        </FloatingPortal>
        <span ref={refs.setReference} {...getReferenceProps()}>
          {Icon ? <Icon /> : title}
        </span>
      </span>
    </>
  );
};

export default CommonToolBar;
