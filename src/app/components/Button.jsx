import React from 'react'
import * as R from 'ramda'
import { classNamesV, isNotBlank } from '../../common/utils'
import Icon from './Icon'

import './Button.scss'

const Button = ({
    action,
    classNames,
    disabled,
    label,
    icon,
    iconRight,
    id,
    onClick,
    secondary,
}) => {
    const iconClassName = !!icon || !!iconRight ? 'with-icon' : ''

    const buttonType = R.cond([
        [R.always(action), R.always('action')],
        [R.always(secondary), R.always('secondary')],
        [R.T, R.always('tertiary')],
    ])()

    return (
        <button
            className={classNamesV(
                'button',
                classNames,
                buttonType,
                iconClassName
            )}
            disabled={disabled}
            id={id}
            onClick={onClick}
        >
            {isNotBlank(icon) && (
                <Icon
                    classNames="button-icon left material-icons"
                    name={icon}
                />
            )}
            <div className="button-label">{label}</div>
            {isNotBlank(iconRight) && (
                <Icon
                    classNames="button-icon right material-icons"
                    name={iconRight}
                />
            )}
        </button>
    )
}

export default Button
