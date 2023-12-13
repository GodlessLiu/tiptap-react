import { useMemo } from 'react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = (props) => {
  // const editor = props.editor;
  const { editor, children } = props;

  const menus = useMemo(() => {
    if (!editor) return;
    const { extensions } = editor.extensionManager;
    const ToolBarItems = extensions
      .map((ext) => {
        const { getToolbarItems } = ext.options;
        if (!getToolbarItems) return;
        const toolBarItem = getToolbarItems({
          editor: props.editor,
        });
        return toolBarItem;
      })
      .filter(Boolean);

    return ToolBarItems.flat().sort((a, b) => {
      return a!.priority - b!.priority;
    });
  }, []);

  return (
    <>
      <div className="pt-4 editor-header flex flex-row gap-2 flex-wrap">
        {menus?.map((menu) => {
          const Comp = menu!.component!;
          return <Comp {...menu!.props} editor={editor} />;
        })}
        <div className="ml-auto mr-2">{children}</div>
      </div>
    </>
  );
};
export default Header;
