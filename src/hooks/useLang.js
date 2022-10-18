import { useContext } from 'react'
import * as R from 'ramda'
import { LangContext } from '../app/contexts/langContext'
import {
    LOCAL_STORAGE_KEYS,
    SUPPORTED_LANGS,
    SUPPORTED_LANG_NAMES,
} from '../common/constants'
import { toggle } from '../common/utils'

export const useLang = (defaultPath = []) => {
    const {
        getCopy: getCopyContext,
        lang,
        setLang: setLangState,
    } = useContext(LangContext)

    const langName = SUPPORTED_LANG_NAMES[lang]

    const otherLang = toggle(lang, SUPPORTED_LANGS.EN, SUPPORTED_LANGS.FR)

    const setLang = (newLang) =>
        R.pipe(
            setLangState,
            R.tap(() => localStorage.setItem(LOCAL_STORAGE_KEYS.LANG, newLang)),
            R.tap(() => document.documentElement.setAttribute('lang', newLang))
        )(newLang)

    const toggleLang = () => setLang(otherLang)

    const getCopy = (path) => getCopyContext([...defaultPath, ...path])

    return {
        getCopy,
        lang,
        langName,
        otherLang,
        setLang,
        toggleLang,
    }
}
