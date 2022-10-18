export const THEMES = {
    DARK: 'dark-theme',
    LIGHT: 'light-theme',
}

export const THEME_NAMES = {
    [THEMES.DARK]: 'Dark (^T)',
    [THEMES.LIGHT]: 'Light (^T)',
}

export const SUPPORTED_LANGS = {
    EN: 'en',
    FR: 'fr',
}

export const SUPPORTED_LANG_NAMES = {
    [SUPPORTED_LANGS.EN]: 'English (^L)',
    [SUPPORTED_LANGS.FR]: 'French (^L)',
}

export const LOCAL_STORAGE_KEYS = {
    LANG: 'language',
    THEME: 'theme',
}

export const MAIN_CONTENT_ID = 'main-content'

export const FOOTER_ID = 'footer'

export const EMAIL_ADDRESS_ID = 'email-address'

export const PHONE_NUMBER_ID = 'phone-number'

export const NAVBAR_IDS = {
    ABOUT: 'about',
    EXPERIENCES: 'experiences',
    OTHER: 'other',
    SKILLS: 'skills',
}

export const SKILL_TAGS = {
    BACKEND: 'backend',
    FRONTEND: 'frontend',
    LEARNING: 'learning',
}

export const SKILL_FILTERS = {
    ALL: {
        icon: 'visibility',
        value: 'all',
    },
    BACKEND: {
        icon: 'settings_suggest',
        value: SKILL_TAGS.BACKEND,
    },
    FRONTEND: {
        icon: 'palette',
        value: SKILL_TAGS.FRONTEND,
    },
    LEARNING: {
        icon: 'science',
        value: SKILL_TAGS.LEARNING,
    },
}
