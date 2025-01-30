import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DSAccordion from '../../components/Accordion';

export const Accordion = ({ 
    customClasses,
    openSingleItem = true,
    isExpanded = false,
    accordionContent,
}) => {
    return (
        <DSAccordion
            customClasses={classNames(customClasses)}
            openSingleItem={openSingleItem}
            isExpanded={isExpanded}
            accordionContent={accordionContent}
        />
    );
};

Accordion.propTypes = {
    customClasses: PropTypes.string,
    openSingleItem: PropTypes.bool,
    isExpanded: PropTypes.bool,
    accordionContent: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ).isRequired,
};