import * as R from 'ramda'
import { SKILL_TAGS } from './constants'

export const isBlank = R.anyPass([R.isNil, R.isEmpty])

export const isNotBlank = R.complement(isBlank)

export const notEquals = R.complement(R.equals)

export const getFromLocalStorageOr = (key, fallback = '') =>
    R.pipe(() => localStorage.getItem(key), R.defaultTo(fallback))()

export const toggle = (val, option1, option2) =>
    R.equals(val, option1) ? option2 : option1

export const replaceTags = R.curry((text, tags) =>
    R.pipe(
        R.keys,
        R.reduce(
            (acc, key) =>
                R.replace(new RegExp(`{${key}}`, 'g'), tags[key], acc),
            text
        )
    )(tags)
)

export const scrollToSection = (id) => () => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const classNamesV = (...args) =>
    R.pipe(
        R.defaultTo([]),
        R.map(
            R.cond([
                [R.is(String), R.identity],
                [
                    R.is(Array),
                    ([cond, ifTrue, ifFalse]) =>
                        cond ? ifTrue : R.defaultTo('', ifFalse),
                ],
                [R.T, R.always('')],
            ])
        ),
        R.join(' '),
        R.trim
    )(args)

export const keyPressWrapper = R.curry((func, { key }) =>
    [' ', 'Enter'].includes(key) ? func() : null
)

export const getTag = R.cond([
    [
        R.equals(SKILL_TAGS.LEARNING),
        R.always({ icon: 'science', label: SKILL_TAGS.LEARNING }),
    ],
    [
        R.equals(SKILL_TAGS.BACKEND),
        R.always({
            icon: 'settings_suggest',
            label: SKILL_TAGS.BACKEND,
        }),
    ],
    [R.T, R.always({ icon: 'palette', label: SKILL_TAGS.FRONTEND })],
])

export const copyToClipboard = (text) => navigator.clipboard.writeText(text)

// eslint-disable-next-line no-undef
export const getRelativeSource = (src) => `${process.env.PUBLIC_URL}${src}`

export const isMobile = () =>
    window.matchMedia('(pointer:coarse)').matches ||
    window.matchMedia('(max-width: 650px)').matches
