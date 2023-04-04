import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import { useMemo } from 'react';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import ComponentsOverrides from './overrides';

export default function ThemeProvider({ children }) {
  const themeDirection = 'ltr';
  const isLight = 'light';

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      breakpoints,
      typography,
      direction: themeDirection,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
