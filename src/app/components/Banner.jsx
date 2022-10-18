import React from 'react'
import { classNamesV, isNotBlank } from '../../common/utils'
import Icon from './Icon'

import './Banner.scss'

export const BANNER_TYPES = {
    INFO: 'info',
}

const Banner = ({
    children,
    classNames,
    content,
    emoji,
    emojiAlt,
    icon,
    type,
}) => (
    <div className={classNamesV('banner', type, classNames)}>
        <div className="img-container">
            {isNotBlank(emoji) ? (
                <span aria-label={emojiAlt} className="banner-emoji" role="img">
                    {emoji}
                </span>
            ) : (
                <Icon classNames="banner-icon" name={icon} />
            )}
        </div>
        <div className="banner-content">{children || content}</div>
    </div>
)

Banner.defaultProps = {
    type: BANNER_TYPES.INFO,
}

export default Banner
