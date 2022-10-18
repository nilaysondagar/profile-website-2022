import { useCallback, useEffect } from 'react'

export const useKeyboardShortcuts = ({ toggleLang, toggleTheme }) => {
    const handleKeyPress = useCallback(
        (event) => {
            if (event.ctrlKey && event.key === 'l') toggleLang()
            if (event.ctrlKey && event.key === 't') toggleTheme()
        },
        [toggleLang, toggleTheme]
    )

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [handleKeyPress])
}
