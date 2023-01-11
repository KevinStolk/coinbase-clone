import React, {useState, useEffect, createContext} from 'react'

const getUserTheme = () => {
    if(typeof window !== 'undefined' && window.localStorage) {
        const userStoredTheme = window.localStorage.getItem('theme')
        if(typeof userStoredTheme === 'string') {
            return userStoredTheme;
        }
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches) {
            return 'dark'
        }
    }
    return 'light'
}

export const ThemeContext = createContext()

export const ThemeProvider = ({userTheme, children}) => {
    const [theme, setTheme] = useState(getUserTheme)

    const setDefaultTheme = (theme) => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)

        localStorage.setItem('theme', theme)
    }

    if (userTheme) {
        setDefaultTheme(userTheme)
    }

    useEffect(() => {
        setDefaultTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

