import { useMemo } from 'react';
import { EditorProps } from '../types';

const Header: React.FC<EditorProps> = (props: EditorProps) => {
  const editor = props.editor;
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
      <div className="editor-header">
        {menus?.map((menu) => {
          const Comp = menu!.component!;
          return <Comp {...menu!.props} editor={editor} />;
        })}
      </div>
    </>
  );
};
export default Header;
