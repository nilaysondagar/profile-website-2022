import React from 'react'
import * as R from 'ramda'
import { getRelativeSource, getTag, isNotBlank } from '../../../common/utils'
import Icon from '../../components/Icon'
import Popup from '../../components/Popup'

import './SkillPopup.scss'
import Button from '../../components/Button'
import Banner from '../../components/Banner'

const SkillPopup = ({ closePopup, getCopy, isVisible, skill }) => {
    return (
        <Popup
            classNames="skill-popup"
            closePopup={closePopup}
            isVisible={isVisible}
        >
            <div className="popup-header">
                <img
                    alt={`${getCopy(skill.titleCopyPath)} logo`}
                    className="header-image"
                    draggable="false"
                    src={getRelativeSource(skill.src)}
                />
                <h1 className="as-h2">{getCopy(skill.titleCopyPath)}</h1>
                <div className="tags">
                    {R.map(
                        R.pipe(getTag, ({ icon, label }) => (
                            <div className="popup-skill-tag" key={label}>
                                <Icon classNames="card-tag-icon" name={icon} />
                                <span className="card-tag-label">
                                    {getCopy(['skillFilters', label])}
                                </span>
                            </div>
                        ))
                    )(skill.tags)}
                </div>
            </div>
            <div className="scrollable-content">
                <div className="description">
                    <div className="description-text">
                        {getCopy(skill.descriptionCopyPath)}
                    </div>
                </div>
                {isNotBlank(skill.bannerCopyPath) && (
                    <Banner
                        classNames="skill-popup-banner"
                        content={getCopy(skill.bannerCopyPath)}
                        emoji={skill.bannerEmoji}
                        emojiAlt={getCopy(skill.bannerEmojiAltPath)}
                    />
                )}
                <div className="bullets">
                    {getCopy(skill.bulletsDescriptionCopyPath)}
                    <ul className="bullet-list">
                        {R.pipe(
                            R.defaultTo([]),
                            getCopy,
                            R.map((bullet) => (
                                <li className="bullet-item" key={bullet}>
                                    {bullet}
                                </li>
                            ))
                        )(skill.bulletsPath)}
                    </ul>
                </div>
            </div>
            <Button action label="Close" onClick={closePopup} />
        </Popup>
    )
}

export default SkillPopup
