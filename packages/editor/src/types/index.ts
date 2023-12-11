import { Editor } from '..';

export interface EditorProps {
  editor: Editor;
}

export interface BubbleItem {
  priority: number;
  component?: (props: any) => JSX.Element;
  props?: BubbleItemProps;
}
export interface BubbleItemProps {
  editor: Editor;
  isActive?: () => boolean;
  visible?: boolean;
  iconStyle?: string;
  title?: string;
  action?: () => void;
}

export interface ImageExtraOptions {
  upload?: (file: File) => any;
}
