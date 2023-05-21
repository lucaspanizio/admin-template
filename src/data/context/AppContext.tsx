import { ReactNode, createContext, useEffect, useState } from "react";

interface IAppContext {
    theme?: string
    toogleTheme?: () => void
    children?: ReactNode
}

const AppContext = createContext<IAppContext>({})

export function AppProvider(props: IAppContext) {
    const [theme, setTheme] = useState('dark')

    function toogleTheme() {
        const newTheme = (theme === '') ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme')
      setTheme(savedTheme ?? 'dark')
    }, [])

    return (
        <AppContext.Provider value={{
            theme,
            toogleTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext }