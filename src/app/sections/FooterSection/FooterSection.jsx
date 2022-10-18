import React from 'react'
import * as R from 'ramda'
import { FOOTER_ID } from '../../../common/constants'
import { contactInfo } from '../../../common/contactInfo'
import { externalLinks } from '../../../common/externalLinks'
import { getRelativeSource, isBlank, isNotBlank } from '../../../common/utils'
import { useLang } from '../../../hooks/useLang'
import Copyable from '../../components/Copyable'
import Icon from '../../components/Icon'
import Section from '../../components/Section'

import './FooterSection.scss'

const FooterSection = () => {
    const { getCopy } = useLang(['footerSection'])

    return (
        <Section classNames="footer-section" id={FOOTER_ID} type="footer">
            <div className="external-links">
                <h1 className="as-h3">{getCopy(['externalLinks'])}</h1>
                {R.map(({ label, link, imgSrc, downloadPath }) => (
                    <a
                        className="link-wrapper"
                        download={isNotBlank(downloadPath)}
                        href={downloadPath || link}
                        key={label}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <div className="external-link">
                            <img
                                alt={`${label} logo`}
                                className="link-image"
                                src={getRelativeSource(imgSrc)}
                            />
                            <div className="link-label">
                                {label}
                                <Icon
                                    classNames="link-icon"
                                    name={
                                        isBlank(downloadPath)
                                            ? 'open_in_new'
                                            : 'cloud_download'
                                    }
                                />
                            </div>
                        </div>
                    </a>
                ))(externalLinks)}
            </div>
            <div className="contact-info">
                <h1 className="as-h3">{getCopy(['contactInfo'])}</h1>
                {R.map(({ copyable, icon, id, key, value }) =>
                    copyable ? (
                        <Copyable copy={value} id={id} key={key}>
                            <div className="info-pair" key={key}>
                                <Icon classNames="info-icon" name={icon} />
                                <div className="info-value">{value}</div>
                            </div>
                        </Copyable>
                    ) : (
                        <div className="info-pair" key={key}>
                            <Icon classNames="info-icon" name={icon} />
                            <div className="info-value">{value}</div>
                        </div>
                    )
                )(contactInfo)}
            </div>
        </Section>
    )
}

export default FooterSection
