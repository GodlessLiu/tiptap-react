import {
  FloatingPortal,
  autoPlacement,
  autoUpdate,
  offset,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useState } from 'react';
import { WithToolTipProps } from '../types';

const WithToolTip: React.FC<WithToolTipProps> = (props) => {
  const { title, children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      autoPlacement({
        allowedPlacements: ['top', 'bottom'],
      }),
      offset(5),
    ],
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
      <FloatingPortal>
        {isOpen && (
          <div
            className="Tooltip"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {title}
          </div>
        )}
      </FloatingPortal>
      <span ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </span>
    </>
  );
};

export default WithToolTip;
