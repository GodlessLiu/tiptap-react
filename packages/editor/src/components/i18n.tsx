import { createContext } from 'react';

type DataContext = Record<string, string>;
const I18nContext = createContext<DataContext | null>(null);

export default I18nContext;
