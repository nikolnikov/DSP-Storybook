'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Link = ({
    customClasses = [],
    iconLeft,
    iconRight,
    isDestructive,
    isInverse,
    label,
    newWindow,
    url
}) => {
    return iconLeft || iconRight ? (
        <a
            href={url}
            target={newWindow ? '_blank' : '_self'}
            rel={newWindow ? 'noreferrer' : undefined}
            className={classNames('ds-link', customClasses, {
                '--destructive': isDestructive,
                '--inverse': isInverse,
                '--icons': iconLeft || iconRight
            })}
        >
            {iconLeft && (
                <span
                    className={`ds-icon--${iconLeft}`}
                    aria-label={iconLeft}
                ></span>
            )}
            <span>{label}</span>
            {iconRight && (
                <span
                    className={`ds-icon--${iconRight}`}
                    aria-label={iconRight}
                ></span>
            )}
        </a>
    ) : (
        <a
            href={url}
            target={newWindow ? '_blank' : '_self'}
            rel={newWindow ? 'noreferrer' : undefined}
            className={classNames('ds-link', customClasses, {
                '--destructive': isDestructive,
                '--inverse': isInverse,
                '--icons': iconLeft || iconRight
            })}
        >
            {label}
        </a>
    );
};

Link.propTypes = {
    customClasses: PropTypes.string,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    isDestructive: PropTypes.bool,
    isInverse: PropTypes.bool,
    label: PropTypes.string.isRequired,
    newWindow: PropTypes.bool,
    url: PropTypes.string
};

export default Link;
