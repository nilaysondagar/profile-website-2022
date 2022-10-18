import React, { useState } from 'react'
import * as R from 'ramda'
import {
    LOCAL_STORAGE_KEYS,
    SUPPORTED_LANGS,
    THEMES,
} from '../../common/constants'
import copy from '../../common/copy'
import { LangContext } from './langContext'
import { ThemeContext } from './themeContext'
import { getFromLocalStorageOr } from '../../common/utils'

const GlobalContextWrapper = ({ children }) => {
    const [lang, setLang] = useState(
        getFromLocalStorageOr(LOCAL_STORAGE_KEYS.LANG, SUPPORTED_LANGS.EN)
    )
    const [theme, setTheme] = useState(
        getFromLocalStorageOr(LOCAL_STORAGE_KEYS.THEME, THEMES.LIGHT)
    )

    const getCopy = (path) => R.pathOr('', [...path, lang], copy)

    return (
        <LangContext.Provider value={{ getCopy, lang, setLang }}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </LangContext.Provider>
    )
}

export default GlobalContextWrapper
