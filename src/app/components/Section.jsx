import React from 'react'
import { classNamesV } from '../../common/utils'

import './Section.scss'

const Section = ({ classNames, children, id, type = 'section' }) => {
    const SectionTag = type

    return (
        <SectionTag
            className={classNamesV('portfolio-section', classNames)}
            id={id}
        >
            <div className="section-content">{children}</div>
        </SectionTag>
    )
}

export default Section
