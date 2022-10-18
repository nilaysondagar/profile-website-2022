import React from 'react'

export const LangContext = React.createContext({
    getCopy: () => {},
    lang: 'en',
    setLang: () => {},
})
