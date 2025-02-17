import React from 'react';
import DSPagination from '../components/Pagination';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.scss';

export const Pagination = ({ 
    customClasses = [],
    nextHandler,
    prevHandler,
    totalItemCount,
    itemCountSelectionArray,
}) => {
    return (
        <DSPagination
            customClasses={classNames(customClasses)}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            totalItemCount={totalItemCount}
            itemCountSelectionArray={itemCountSelectionArray}
        />
    );
};

Pagination.propTypes = {
    customClasses: PropTypes.array,
    nextHandler: PropTypes.func,
    prevHandler: PropTypes.func,
    totalItemCount: PropTypes.number,
    itemCountSelectionArray: PropTypes.array
};