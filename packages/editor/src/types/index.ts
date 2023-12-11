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
  title?: string;
  Icon?: (props: any) => JSX.Element;
  action?: () => void;
}

export interface ImageExtraOptions {
  upload?: (file: File) => any;
}

export interface BaseOptions {
  getToolbarItems?: (props: EditorProps) => BubbleItem[] | BubbleItem;
}
