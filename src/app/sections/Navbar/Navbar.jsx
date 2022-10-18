import React from 'react'
import { NAVBAR_IDS } from '../../../common/constants'
import { scrollToSection } from '../../../common/utils'
import { useHueRotate } from '../../../hooks/useHueRotate'
import { useLang } from '../../../hooks/useLang'

import './Navbar.scss'

const Navbar = () => {
    const { getCopy } = useLang(['navbar'])

    const { clickCount, onClick } = useHueRotate()

    return (
        <nav aria-label={getCopy(['ariaLabel'])} className="nav-bar">
            <div
                className="nav-bar-title"
                onClick={onClick}
                style={{ transform: `scale(${1 - clickCount * 0.05})` }}
            >
                {getCopy(['personal'])}
            </div>
            <div
                className="nav-bar-item right-start"
                onClick={scrollToSection(NAVBAR_IDS.ABOUT)}
                role="link"
                tabIndex="0"
            >
                {getCopy(['about'])}
            </div>
            <div
                className="nav-bar-item"
                onClick={scrollToSection(NAVBAR_IDS.SKILLS)}
                role="link"
                tabIndex="0"
            >
                {getCopy(['skills'])}
            </div>
            <div
                className="nav-bar-item"
                onClick={scrollToSection(NAVBAR_IDS.EXPERIENCES)}
                role="link"
                tabIndex="0"
            >
                {getCopy(['experience'])}
            </div>
            <div
                className="nav-bar-item"
                onClick={scrollToSection(NAVBAR_IDS.OTHER)}
                role="link"
                tabIndex="0"
            >
                {getCopy(['other'])}
            </div>
        </nav>
    )
}

export default Navbar
