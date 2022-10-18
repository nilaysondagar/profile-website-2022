import React from 'react'
import * as R from 'ramda'
import { useLang } from '../../../hooks/useLang'

import './TimeLine.scss'
import { keyPressWrapper } from '../../../common/utils'

const TimeLine = ({ defaultLangPath = [], events, selectEvent }) => {
    const { getCopy } = useLang(defaultLangPath)

    const minWidth = R.length(events) * 140 + 400

    return (
        <div className="time-line-wrapper">
            <div className="time-line-container" style={{ minWidth }}>
                {R.map((event) => (
                    <div
                        className="time-line-item"
                        key={event.key}
                        onClick={() => selectEvent(event)}
                    >
                        <div className="time-line-item-content">
                            <div className="title">
                                {getCopy(event.titleCopyPath)}
                            </div>
                            <div className="date">{event.date}</div>
                        </div>
                        <span
                            className="event-marker"
                            onKeyPress={keyPressWrapper(() =>
                                selectEvent(event)
                            )}
                            tabIndex="0"
                        />
                    </div>
                ))(events)}
            </div>
        </div>
    )
}

export default TimeLine
