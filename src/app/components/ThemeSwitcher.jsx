import React from 'react'
import * as R from 'ramda'
import { THEMES } from '../../common/constants'
import { classNamesV } from '../../common/utils'
import { useTheme } from '../../hooks/useTheme'
import Icon from './Icon'

import './ThemeSwitcher.scss'

const ThemeSwitcher = () => {
    const { toggleTheme, theme, themeName } = useTheme()

    return (
        <div
            className="theme-switcher"
            onClick={toggleTheme}
            onMouseDown={(e) => e.preventDefault()}
            tabIndex="0"
        >
            <Icon
                classNames={classNamesV('theme-icon', [
                    R.equals(THEMES.LIGHT, theme),
                    'visible',
                ])}
                name="light_mode"
            />
            <Icon
                classNames={classNamesV('theme-icon', [
                    R.equals(THEMES.DARK, theme),
                    'visible',
                ])}
                name="dark_mode"
            />
            <div className="theme-name">{themeName}</div>
        </div>
    )
}

export default ThemeSwitcher
