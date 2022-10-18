import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import * as R from 'ramda'
import { NAVBAR_IDS } from '../../../common/constants'
import { articleCards, projectCards } from '../../../common/otherCards'
import { classNamesV, getRelativeSource } from '../../../common/utils'
import { useLang } from '../../../hooks/useLang'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import Section from '../../components/Section'
import Toggle from '../../components/Toggle'

import './OtherSection.scss'

const OtherSection = () => {
    const { getCopy } = useLang(['otherSection'])

    const [isProjects, setIsProjects] = useState(true)

    const openLink = (link) => () => window.open(link, '_blank')

    const isProjectKey = R.equals('projects')

    const renderCards = (key) => (
        <motion.div
            animate={{ y: 0 }}
            className={classNamesV('other-cards-list', [
                !isProjectKey(key),
                'articles',
            ])}
            exit={{ y: isProjectKey(key) ? '-100%' : '100%' }}
            initial={{ y: isProjectKey(key) ? '-100%' : '100%' }}
            key={key}
            transition={{
                type: 'spring',
                damping: 10,
                stiffness: 100,
                mass: 0.5,
            }}
        >
            {R.map(({ key, subtitleCopy, titleCopy, link, icon }) => (
                <div className="other-card" key={key}>
                    <div className="other-card-logo">
                        <Icon classNames="other-card-icon" name={icon} />
                    </div>
                    <h2 className="as-h3">{getCopy(titleCopy)}</h2>
                    <div className="other-card-description">
                        {getCopy(subtitleCopy)}
                    </div>
                    <Button
                        action
                        classNames="other-card-button"
                        iconRight="open_in_new"
                        label={getCopy(['viewLink'])}
                        onClick={openLink(link)}
                        role="link"
                    />
                </div>
            ))(isProjectKey(key) ? projectCards : articleCards)}
        </motion.div>
    )

    return (
        <Section classNames="other-section" id={NAVBAR_IDS.OTHER}>
            <div className="other-content">
                <h1>
                    {getCopy(['title'])}{' '}
                    <span
                        aria-label={getCopy(['emojiAlt'])}
                        className="header-emoji"
                        role="img"
                    >
                        🔮
                    </span>
                </h1>
                <div className="body-text">{getCopy(['subtitle'])}</div>
            </div>
            <div className="image-wrapper">
                <img
                    alt={getCopy(['imageAlt'])}
                    className="other-image"
                    draggable="false"
                    src={getRelativeSource('/other-image.svg')}
                />
            </div>
            <Toggle
                isLeft={isProjects}
                onToggle={() => setIsProjects(R.not)}
                optionLeft={{
                    icon: 'code',
                    label: getCopy(['cardsToggle', 'leftLabel']),
                }}
                optionRight={{
                    icon: 'bookmark_border',
                    label: getCopy(['cardsToggle', 'rightLabel']),
                }}
            />
            <div className="other-cards">
                <AnimatePresence>
                    {renderCards(isProjects ? 'projects' : 'articles')}
                </AnimatePresence>
            </div>
        </Section>
    )
}

export default OtherSection
