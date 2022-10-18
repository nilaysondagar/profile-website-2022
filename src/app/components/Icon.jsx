import React from 'react'
import { classNamesV, isNotBlank, keyPressWrapper } from '../../common/utils'

import './Icon.scss'

const Icon = ({
    classNames,
    forceClickStyles,
    forceClickHoverStyles,
    name,
    onClick,
    ...props
}) => {
    const isClickable = forceClickStyles || isNotBlank(onClick)

    const tabIndex = isClickable && !forceClickStyles ? '0' : null

    return (
        <i
            className={classNamesV(
                'ns-icon',
                'material-icons',
                classNames,
                [isClickable, 'clickable'],
                [forceClickHoverStyles, 'click-hover']
            )}
            onClick={onClick}
            onKeyPress={keyPressWrapper(onClick)}
            tabIndex={tabIndex}
            {...props}
        >
            {name}
        </i>
    )
}

export default Icon
