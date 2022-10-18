import React, { useEffect } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { GITHUB_LINK } from './common/externalLinks'
import { classNamesV } from './common/utils'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts'
import { useLang } from './hooks/useLang'
import { useTheme } from './hooks/useTheme'
import SkipLink from './app/components/SkipLink'
import ThemeSwitcher from './app/components/ThemeSwitcher'
import LangSwitcher from './app/components/LangSwitcher'
import HeaderSection from './app/sections/HeaderSection/HeaderSection'
import Navbar from './app/sections/Navbar/Navbar'
import SkillsSection from './app/sections/SkillsSection/SkillsSection'
import ExperiencesSection from './app/sections/ExperiencesSection/ExperiencesSection'
import FooterSection from './app/sections/FooterSection/FooterSection'

import './App.scss'
import OtherSection from './app/sections/OtherSection/OtherSection'

const App = () => {
    const { lang, getCopy, toggleLang } = useLang(['app'])
    const { theme, toggleTheme } = useTheme()

    useKeyboardShortcuts({ toggleLang, toggleTheme })

    useEffect(() => {
        console.clear()
        console.log(
            `${getCopy([
                'consoleMessage',
            ])}: ${GITHUB_LINK}/profile-website-2022`
        )
    }, [lang])

    return (
        <MotionConfig reducedMotion="user">
            <motion.div
                className={classNamesV('portfolio-container', theme)}
                layoutScroll
            >
                <SkipLink />
                <Navbar />
                <ThemeSwitcher />
                <LangSwitcher />
                <HeaderSection />
                <SkillsSection />
                <ExperiencesSection />
                <OtherSection />
                <FooterSection />
                <div id="popup-root" />
            </motion.div>
        </MotionConfig>
    )
}

export default App
