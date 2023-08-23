import {createContext} from 'react'

type ThemeContextType = {
    sizeCursor: { w: number, h: number },
    setSizeCursor : Function
};

export const CursorContext = createContext<ThemeContextType>(undefined);
