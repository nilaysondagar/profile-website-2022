import React from 'react'
import {
    EMAIL_ADDRESS_ID,
    FOOTER_ID,
    MAIN_CONTENT_ID,
    NAVBAR_IDS,
    PHONE_NUMBER_ID,
} from '../../../common/constants'
import {
    getRelativeSource,
    isMobile,
    scrollToSection,
} from '../../../common/utils'
import { useLang } from '../../../hooks/useLang'
import Button from '../../components/Button'
import Section from '../../components/Section'

import './HeaderSection.scss'

const HeaderSection = () => {
    const { getCopy } = useLang(['headerSection'])

    const contactMe = () => {
        const contactId = isMobile() ? PHONE_NUMBER_ID : EMAIL_ADDRESS_ID

        scrollToSection(FOOTER_ID)()
        document.getElementById(contactId)?.classList.add('focused')
        document.getElementById(contactId)?.focus({ preventScroll: true })

        setTimeout(
            () =>
                document.getElementById(contactId)?.classList.remove('focused'),
            5000
        )
    }

    return (
        <Section
            classNames="header-section"
            id={NAVBAR_IDS.ABOUT}
            type="header"
        >
            <div className="header-text">
                <h1>
                    {getCopy(['title'])}{' '}
                    <span
                        aria-label={getCopy(['emojiAlt'])}
                        className="header-emoji"
                        role="img"
                    >
                        👋
                    </span>
                </h1>
                <div className="body-text">{getCopy(['subtitle'])}</div>
                <Button
                    action
                    classNames="header-button"
                    iconRight="arrow_forward"
                    id={MAIN_CONTENT_ID}
                    label={getCopy(['buttonLabel'])}
                    onClick={contactMe}
                />
            </div>
            <img
                alt={getCopy(['imageAlt'])}
                className="header-image"
                draggable="false"
                src={getRelativeSource('/header-image.svg')}
            />
        </Section>
    )
}

export default HeaderSection
