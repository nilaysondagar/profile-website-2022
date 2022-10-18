import React from 'react'
import * as R from 'ramda'
import { LayoutGroup, motion } from 'framer-motion'
import { SKILL_FILTERS } from '../../../common/constants'
import { classNamesV, keyPressWrapper } from '../../../common/utils'
import Icon from '../../components/Icon'

import './TagFilters.scss'

const TagFilters = ({ filter, getCopy, setFilter }) => {
    return (
        <div className="filter-bar">
            <LayoutGroup>
                {R.pipe(
                    R.values,
                    R.map(({ icon, value }) => (
                        <div
                            className={classNamesV('tag-filter', [
                                R.equals(filter, value),
                                'selected',
                            ])}
                            key={value}
                            onClick={() => setFilter(value)}
                            onKeyPress={keyPressWrapper(() => setFilter(value))}
                            tabIndex="0"
                        >
                            <Icon name={icon} />
                            <div className="tag-title">
                                {getCopy(['skillFilters', value])}
                            </div>
                            {R.equals(filter, value) && (
                                <motion.div
                                    className="selected-filter"
                                    layout
                                    layoutId="selected-filter"
                                    // Set here to prevent distortion when animating
                                    style={{ borderRadius: 100 }}
                                />
                            )}
                        </div>
                    ))
                )(SKILL_FILTERS)}
            </LayoutGroup>
        </div>
    )
}

export default TagFilters
