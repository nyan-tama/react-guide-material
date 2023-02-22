import { useState, createContext, useContext } from "react"

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={setTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
export const useUpdateTheme = () => useContext(ThemeUpdateContext);