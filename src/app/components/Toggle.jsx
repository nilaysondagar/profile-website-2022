import React from 'react'
import { motion } from 'framer-motion'
import { classNamesV, keyPressWrapper } from '../../common/utils'
import Icon from './Icon'

import './Toggle.scss'

const Toggle = ({
    classNames,
    isLeft,
    key,
    onToggle,
    optionLeft,
    optionRight,
}) => {
    const renderSlider = () => (
        <motion.div
            className="slider"
            layout
            layoutId={`selected-toggle-${key}`}
            // Set here to prevent distortion when animating
            style={{ borderRadius: 100 }}
        />
    )

    return (
        <div className={classNamesV('toggle-wrapper', classNames)}>
            <button
                aria-pressed={!isLeft}
                className="toggle"
                onClick={onToggle}
                onKeyPress={keyPressWrapper(onToggle)}
                tabIndex="0"
            >
                <div
                    className={classNamesV('toggle-item', [isLeft, 'selected'])}
                >
                    <Icon
                        classNames="toggle-item-icon"
                        name={optionLeft.icon}
                    />
                    <div className="toggle-item-label">{optionLeft.label}</div>
                    {isLeft && renderSlider()}
                </div>
                <div
                    className={classNamesV('toggle-item', 'right', [
                        !isLeft,
                        'selected',
                    ])}
                >
                    <div className="toggle-item-label">{optionRight.label}</div>
                    <Icon
                        classNames="toggle-item-icon"
                        name={optionRight.icon}
                    />
                    {!isLeft && renderSlider()}
                </div>
            </button>
        </div>
    )
}

export default Toggle
