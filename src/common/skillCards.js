import { SKILL_TAGS } from './constants'

const BASE_PATH = '/skills'

const getCopyPaths = (key) => ({
    key,
    titleCopyPath: ['skills', key, 'title'],
    descriptionCopyPath: ['skills', key, 'description'],
    bulletsPath: ['skills', key, 'bullets'],
    bulletsDescriptionCopyPath: ['skills', key, 'bulletsDescription'],
})

const getBannerProps = (key, emoji) => ({
    bannerCopyPath: ['skills', key, 'banner', 'content'],
    bannerEmoji: emoji,
    bannerEmojiAltPath: ['skills', key, 'banner', 'emojiAlt'],
})

export const skillCards = [
    {
        ...getCopyPaths('react'),
        src: `${BASE_PATH}/react-logo.webp`,
        tags: [SKILL_TAGS.FRONTEND],
    },
    {
        ...getCopyPaths('webBasics'),
        src: `${BASE_PATH}/html-css-js-logo.webp`,
        tags: [SKILL_TAGS.FRONTEND],
    },
    {
        ...getCopyPaths('scss'),
        src: `${BASE_PATH}/scss-logo.webp`,
        tags: [SKILL_TAGS.FRONTEND],
    },
    {
        ...getCopyPaths('animations'),
        src: `${BASE_PATH}/animations-logo.webp`,
        tags: [SKILL_TAGS.FRONTEND],
    },
    {
        ...getCopyPaths('accessibility'),
        ...getBannerProps('accessibility', '💡'),
        src: `${BASE_PATH}/accessibility-logo.webp`,
        tags: [SKILL_TAGS.FRONTEND, SKILL_TAGS.LEARNING],
    },
    {
        ...getCopyPaths('elasticSearch'),
        src: `${BASE_PATH}/elasticsearch-logo.svg`,
        tags: [SKILL_TAGS.BACKEND],
    },
    {
        ...getCopyPaths('node'),
        src: `${BASE_PATH}/node-js-logo.webp`,
        tags: [SKILL_TAGS.BACKEND],
    },
    {
        ...getCopyPaths('kotlin'),
        src: `${BASE_PATH}/kotlin-logo.webp`,
        tags: [SKILL_TAGS.BACKEND, SKILL_TAGS.LEARNING],
    },
    {
        ...getCopyPaths('mongoDb'),
        src: `${BASE_PATH}/mongodb-logo.svg`,
        tags: [SKILL_TAGS.BACKEND],
    },
    {
        ...getCopyPaths('sql'),
        src: `${BASE_PATH}/sql-logo.webp`,
        tags: [SKILL_TAGS.BACKEND],
    },
    {
        ...getCopyPaths('microservices'),
        src: `${BASE_PATH}/microservices-logo.webp`,
        tags: [SKILL_TAGS.BACKEND, SKILL_TAGS.LEARNING],
    },
]
