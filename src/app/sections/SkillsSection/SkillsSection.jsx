import React, { useState } from 'react'
import * as R from 'ramda'
import { AnimatePresence, motion } from 'framer-motion'
import { NAVBAR_IDS, SKILL_FILTERS } from '../../../common/constants'
import { skillCards } from '../../../common/skillCards'
import {
    classNamesV,
    getRelativeSource,
    keyPressWrapper,
    notEquals,
} from '../../../common/utils'
import { useLang } from '../../../hooks/useLang'
import Section from '../../components/Section'
import TagFilters from './TagFilters'
import Tags from './Tags'
import SkillPopup from './SkillPopup'

import './SkillsSection.scss'

const BLANK_SKILL = {
    bullets: [],
    bulletsDescriptionCopyPath: [],
    descriptionCopyPath: [],
    titleCopyPath: [],
    tags: [],
}

const SkillsSection = () => {
    const { getCopy } = useLang(['skillsSection'])

    const [selectedSkill, setSelectedSkill] = useState(BLANK_SKILL)
    const [isPopupVisible, setIsPopupVisible] = useState(false)

    const [filter, setFilter] = useState(SKILL_FILTERS.ALL.value)

    const viewSkill = (skill) => {
        setSelectedSkill(skill)
        setIsPopupVisible(true)
    }

    const closePopup = () => {
        setIsPopupVisible(false)
        setTimeout(() => setSelectedSkill(BLANK_SKILL), 400)
    }

    return (
        <Section classNames="skills-section" id={NAVBAR_IDS.SKILLS}>
            <div className="skills-content">
                <h1>
                    {getCopy(['title'])}{' '}
                    <span
                        aria-label={getCopy(['emojiAlt'])}
                        className="header-emoji"
                        role="img"
                    >
                        🤹
                    </span>
                </h1>
                <div className="body-text">{getCopy(['subtitle'])}</div>
                <TagFilters
                    filter={filter}
                    getCopy={getCopy}
                    setFilter={setFilter}
                />
                <div className="skills-grid">
                    <AnimatePresence>
                        {R.pipe(
                            R.ifElse(
                                () => R.equals(SKILL_FILTERS.ALL.value, filter),
                                R.sort(
                                    R.ascend(
                                        R.pipe(R.prop('titleCopyPath'), getCopy)
                                    )
                                ),
                                R.sortWith([
                                    R.ascend(
                                        R.complement(
                                            R.propSatisfies(
                                                R.includes(filter),
                                                'tags'
                                            )
                                        )
                                    ),
                                    R.ascend(
                                        R.pipe(R.prop('titleCopyPath'), getCopy)
                                    ),
                                ])
                            ),
                            R.map((skill) => (
                                <motion.div
                                    className={classNamesV('skill-card', [
                                        !R.includes(filter, skill.tags) &&
                                            notEquals(
                                                SKILL_FILTERS.ALL.value,
                                                filter
                                            ),
                                        'hidden',
                                    ])}
                                    key={skill.key}
                                    layout="position"
                                    onClick={() => viewSkill(skill)}
                                    onKeyPress={keyPressWrapper(() =>
                                        viewSkill(skill)
                                    )}
                                    tabIndex="0"
                                >
                                    <div className="skill-logo">
                                        <img
                                            alt={`${getCopy(
                                                skill.titleCopyPath
                                            )} logo`}
                                            className="skill-image"
                                            draggable="false"
                                            src={getRelativeSource(skill.src)}
                                        />
                                        <div className="skill-tags">
                                            <Tags
                                                getCopy={getCopy}
                                                tags={skill.tags}
                                            />
                                        </div>
                                    </div>
                                    <div className="skill-title">
                                        {getCopy(skill.titleCopyPath)}
                                    </div>
                                </motion.div>
                            ))
                        )(skillCards)}
                    </AnimatePresence>
                </div>
            </div>
            <SkillPopup
                closePopup={closePopup}
                getCopy={getCopy}
                isVisible={isPopupVisible}
                skill={selectedSkill}
            />
        </Section>
    )
}

export default SkillsSection
