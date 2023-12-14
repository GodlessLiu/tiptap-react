import { createContext } from 'react';
import { DataItem } from '../types';

const I18nContext = createContext<DataItem | null>(null);

export default I18nContext;
