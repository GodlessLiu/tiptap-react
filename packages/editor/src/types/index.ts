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

export type DataItem = Record<string, any>;

export type Data = {
  'zh-CN': DataItem;
  'en-US': DataItem;
};

export type Language = keyof Data;

export interface WithToolTipProps {
  title: string;
  children: React.ReactNode;
}

interface HelperItem {
  command: string;
  options: string[];
}
export type Helper = HelperItem[];
