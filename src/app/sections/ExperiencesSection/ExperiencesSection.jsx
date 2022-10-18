import React, { useState } from 'react'
import { NAVBAR_IDS } from '../../../common/constants'
import { experienceEvents } from '../../../common/experienceEvents'
import { getRelativeSource } from '../../../common/utils'
import { useLang } from '../../../hooks/useLang'
import Section from '../../components/Section'
import TimeLine from './TimeLine'

import './ExperiencesSection.scss'
import ExperiencePopup from './ExperiencePopup'

const BLANK_EXPERIENCE = {
    bullets: [],
    bulletsDescriptionCopyPath: [],
    descriptionCopyPath: [],
    titleCopyPath: [],
}

const ExperiencesSection = () => {
    const { getCopy } = useLang(['experiencesSection'])

    const [selectedExperience, setSelectedExperience] =
        useState(BLANK_EXPERIENCE)
    const [isPopupVisible, setIsPopupVisible] = useState(false)

    const viewExperience = (skill) => {
        setSelectedExperience(skill)
        setIsPopupVisible(true)
    }

    const closePopup = () => {
        setIsPopupVisible(false)
        setTimeout(() => setSelectedExperience(BLANK_EXPERIENCE), 400)
    }

    return (
        <Section classNames="experiences-section" id={NAVBAR_IDS.EXPERIENCES}>
            <div className="image-wrapper">
                <img
                    alt={getCopy(['imageAlt'])}
                    className="experiences-image"
                    draggable="false"
                    src={getRelativeSource('/experiences-image.svg')}
                />
            </div>
            <div className="experiences-text">
                <h1>
                    {getCopy(['title'])}{' '}
                    <span
                        aria-label={getCopy(['emojiAlt'])}
                        className="header-emoji"
                        role="img"
                    >
                        👟
                    </span>
                </h1>
                <div className="body-text">{getCopy(['subtitle'])}</div>
            </div>
            <TimeLine
                defaultLangPath={['experiencesSection']}
                events={experienceEvents}
                selectEvent={viewExperience}
            />
            <ExperiencePopup
                closePopup={closePopup}
                experience={selectedExperience}
                getCopy={getCopy}
                isVisible={isPopupVisible}
            />
        </Section>
    )
}

export default ExperiencesSection
