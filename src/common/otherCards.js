const getCopyPaths = (key) => ({
    key,
    subtitleCopy: ['cards', key, 'subtitle'],
    titleCopy: ['cards', key, 'title'],
})

export const projectCards = [
    {
        link: 'https://nilay.sondagar.com/legacy-v2/#/projects/csc',
        icon: 'mail',
        ...getCopyPaths('cscApp'),
    },
    {
        link: 'https://nilay.sondagar.com/legacy-v2/#/projects/hootsuite-gmb',
        icon: 'store',
        ...getCopyPaths('gmbApp'),
    },
    {
        link: 'https://nilay.sondagar.com/legacy-v2/#/projects/usesafer',
        icon: 'medication',
        ...getCopyPaths('useSaferApp'),
    },
    {
        link: 'https://nilay.sondagar.com/legacy-v2/',
        icon: 'looks_two',
        ...getCopyPaths('portfolioSecondVersion'),
    },
    {
        link: 'https://nilay.sondagar.com/legacy-v1/',
        icon: 'elderly',
        ...getCopyPaths('portfolioFirstVersion'),
    },
]

export const articleCards = [
    {
        link: 'https://www.smashingmagazine.com/2021/05/complete-guide-css-container-queries',
        icon: 'square_foot',
        ...getCopyPaths('containerQueries'),
    },
    {
        link: 'https://developer.chrome.com/blog/shared-element-transitions-for-spas',
        icon: 'auto_awesome',
        ...getCopyPaths('webTransitions'),
    },
    {
        link: 'https://css-tricks.com/scroll-shadows-pure-css-parallax-game-back-on',
        icon: 'mouse',
        ...getCopyPaths('scrollShadows'),
    },
    {
        link: 'https://web.dev/hands-on-portals',
        icon: 'picture_in_picture_alt',
        ...getCopyPaths('portals'),
    },
    {
        link: 'https://css-tricks.com/ground-rules-for-web-animations',
        icon: 'rule',
        ...getCopyPaths('animationRules'),
    },
]
