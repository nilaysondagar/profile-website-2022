import React, { useEffect, useState } from 'react'
import {
    classNamesV,
    copyToClipboard,
    keyPressWrapper,
} from '../../common/utils'
import Icon from './Icon'

import './Copyable.scss'

const Copyable = ({ classNames, children, copy, id }) => {
    const [wasClicked, setWasClicked] = useState(false)

    useEffect(() => {
        if (wasClicked) {
            setTimeout(() => setWasClicked(false), 2000)
        }
    }, [wasClicked])

    const onClick = () => {
        setWasClicked(true)
        copyToClipboard(copy)
    }

    return (
        <div
            className={classNamesV('copyable', classNames)}
            id={id}
            onClick={onClick}
            onKeyPress={keyPressWrapper(onClick)}
            tabIndex="0"
        >
            {children}
            <div className="icon-wrapper">
                <Icon
                    classNames={classNamesV('success-icon', [
                        !wasClicked,
                        'hidden',
                    ])}
                    forceClickHoverStyles
                    name="check"
                />
                <Icon
                    classNames={classNamesV('copy-icon', [
                        wasClicked,
                        'hidden',
                    ])}
                    forceClickStyles
                    name="content_copy"
                />
            </div>
        </div>
    )
}

export default Copyable
