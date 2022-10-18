import React from 'react'
import * as R from 'ramda'
import Icon from '../../components/Icon'

import './Tags.scss'
import { getTag } from '../../../common/utils'

const Tags = ({ getCopy, tags }) => {
    return R.map(
        R.pipe(getTag, ({ icon, label }) => (
            <div className="skill-tag" key={icon} tabIndex="0">
                <Icon classNames="card-tag-icon" name={icon} />
                <span className="card-tag-label">
                    {getCopy(['skillFilters', label])}
                </span>
            </div>
        ))
    )(tags)
}

export default Tags
