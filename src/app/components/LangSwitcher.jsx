import React from 'react'
import * as R from 'ramda'
import { SUPPORTED_LANGS } from '../../common/constants'
import { classNamesV } from '../../common/utils'
import { useLang } from '../../hooks/useLang'
import Icon from './Icon'

import './LangSwitcher.scss'

const LangSwitcher = () => {
    const { toggleLang, lang, langName } = useLang()

    return (
        <div
            className="lang-switcher"
            onClick={toggleLang}
            onMouseDown={(e) => e.preventDefault()}
            tabIndex="0"
        >
            <Icon
                classNames={classNamesV('lang-icon', [
                    R.equals(SUPPORTED_LANGS.EN, lang),
                    'visible',
                ])}
                name="language"
            />
            <Icon
                classNames={classNamesV('lang-icon', [
                    R.equals(SUPPORTED_LANGS.FR, lang),
                    'visible',
                ])}
                name="translate"
            />
            <div className="lang-name">{langName}</div>
        </div>
    )
}

export default LangSwitcher
