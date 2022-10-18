import React from 'react'
import Popup from '../../components/Popup'
import { getRelativeSource } from '../../../common/utils'

import './ExperiencePopup.scss'

const ExperiencePopup = ({ closePopup, experience, getCopy, isVisible }) => {
    return (
        <Popup
            classNames="experience-popup"
            closePopup={closePopup}
            isVisible={isVisible}
        >
            <div className="popup-header">
                <img
                    alt={`${getCopy(experience.titleCopyPath)} logo`}
                    className="header-image"
                    draggable="false"
                    src={getRelativeSource(experience.src)}
                />
                <h1 className="as-h2">{getCopy(experience.titleCopyPath)}</h1>
                <div className="date-range">{experience.date}</div>
            </div>
            {/* TODO: Write copy and reenable
            <div className="scrollable-content">
                <div className="description">
                    <div className="description-text">
                        {getCopy(experience.descriptionCopyPath)}
                    </div>
                </div>
                <div className="bullets">
                    {getCopy(experience.bulletsDescriptionCopyPath)}
                    <ul className="bullet-list">
                        {R.map(({ bulletPath, key }) => (
                            <li className="bullet-item" key={key}>
                                {getCopy(bulletPath)}
                            </li>
                        ))(experience.bullets)}
                    </ul>
                </div>
            </div> */}
            <div className="wip">
                <img
                    alt={getCopy(['wip', 'imgAlt'])}
                    className="wip-image"
                    src={getRelativeSource('/wip.svg')}
                />
                <h2 className="as-h3">{getCopy(['wip', 'title'])}</h2>
                <div className="wip-subtitle">
                    {getCopy(['wip', 'subtitle'])}
                </div>
            </div>
        </Popup>
    )
}

export default ExperiencePopup
