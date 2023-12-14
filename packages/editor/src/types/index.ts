import React from 'react';
import { Editor } from '..';

export interface EditorProps {
  editor: Editor;
  showBubbleItem?: boolean;
  I18n?: boolean;
  styles?: React.CSSProperties;
  showFooter?: boolean;
}

export interface HeaderProps {
  editor: Editor;
  children?: React.ReactNode;
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

export type Data = {
  'zh-CN': Record<string, string>;
  'en-US': Record<string, string>;
};

export type Language = keyof Data;

export interface WithToolTipProps {
  title: string;
  children: React.ReactNode;
}
