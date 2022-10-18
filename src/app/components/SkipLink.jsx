import React from 'react'
import { MAIN_CONTENT_ID } from '../../common/constants'

import './SkipLink.scss'

const SkipLink = () => (
    <a className="skip-link" href={`#${MAIN_CONTENT_ID}`}>
        Skip to Main Content
    </a>
)

export default SkipLink
