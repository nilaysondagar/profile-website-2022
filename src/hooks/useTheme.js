import { useContext } from 'react'
import * as R from 'ramda'
import { ThemeContext } from '../app/contexts/themeContext'
import { LOCAL_STORAGE_KEYS, THEMES, THEME_NAMES } from '../common/constants'
import { toggle } from '../common/utils'

export const useTheme = () => {
    const { setTheme: setThemeState, theme } = useContext(ThemeContext)

    const themeName = THEME_NAMES[theme]

    const otherTheme = toggle(theme, THEMES.DARK, THEMES.LIGHT)

    const setTheme = (newTheme) =>
        R.pipe(
            setThemeState,
            R.tap(() =>
                localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, newTheme)
            )
        )(newTheme)

    const toggleTheme = () => setTheme(otherTheme)

    return {
        otherTheme,
        setTheme,
        theme,
        themeName,
        toggleTheme,
    }
}
