import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import * as R from 'ramda'
import { classNamesV } from '../../common/utils'

import './Popup.scss'
import Icon from './Icon'

const animationVariants = {
    closed: {
        opacity: 0,
        y: 120,
        scale: 0.9,
        transition: {
            duration: 0.5,
            bounce: 0.3,
            type: 'spring',
        },
    },
    exit: {
        opacity: 0,
        y: 40,
        scale: 0.95,
        transition: {
            duration: 0.5,
            bounce: 0.3,
            type: 'spring',
        },
    },
    open: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            bounce: 0.3,
            type: 'spring',
        },
    },
}

const Popup = ({
    children,
    classNames,
    closePopup,
    isVisible,
    popupSelector,
}) => {
    const container = useRef(document.createElement('div'))

    const modalRef = useRef()

    // For accessibility, there must be at least one focusable element in every popup (to at least close the popup)
    const getFocusableElements = () =>
        modalRef.current?.querySelectorAll('[tabindex="0"], button')

    // Trap focus inside the modal
    const handleKeyPress = (e) => {
        if (isVisible) {
            const [first, last] = R.juxt([R.head, R.last])(
                getFocusableElements()
            )

            if (e.key === 'Escape') {
                closePopup()
            } else if (
                e.key === 'Tab' &&
                e.shiftKey &&
                document.activeElement === first
            ) {
                e.preventDefault()
                if (last) last.focus()
            } else if (
                e.key === 'Tab' &&
                !e.shiftKey &&
                document.activeElement === last
            ) {
                e.preventDefault()
                if (first) first.focus()
            }
        }
    }

    useEffect(() => {
        const containerEffectRef = container?.current

        document.querySelector(popupSelector)?.appendChild(containerEffectRef)

        return () => {
            document
                .querySelector(popupSelector)
                ?.removeChild(containerEffectRef)
        }
    }, [])

    useEffect(() => {
        if (isVisible) {
            R.head(getFocusableElements()).focus()

            document
                .querySelector(popupSelector)
                .addEventListener('keydown', handleKeyPress, { capture: true })
        }

        return () => {
            document
                .querySelector(popupSelector)
                .removeEventListener('keydown', handleKeyPress)
        }
    }, [isVisible])

    const renderPopup = () => (
        <AnimatePresence exitBeforeEnter initial="false">
            {isVisible && (
                <motion.div
                    animate={{ opacity: 1 }}
                    className="popup-background"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    onClick={closePopup}
                    ref={modalRef}
                >
                    {isVisible && (
                        <motion.div
                            animate="open"
                            className="bounce-move-fade-container"
                            exit="exit"
                            initial="closed"
                            layout
                            onClick={(e) => e.stopPropagation()}
                            variants={animationVariants}
                        >
                            <div
                                className={classNamesV(
                                    'popup-content',
                                    classNames
                                )}
                            >
                                {children}
                                <Icon
                                    classNames="close-button"
                                    name="close"
                                    onClick={closePopup}
                                />
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )

    return ReactDOM.createPortal(renderPopup(), container?.current)
}

Popup.defaultProps = {
    popupSelector: '#popup-root',
}

export default Popup
