import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ inBox, children }) => {
  const classes = ['products-list',
    inBox ? 'product-list-in-box' : ''].join(' ');
  return (
    <ul className={classes}>
      {children}
    </ul>
  );
};

ProductList.propTypes = {
  inBox: PropTypes.bool,
  /* TODO: make children prop more specific */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ProductList.defaultProps = {
  inBox: false,
};

export default ProductList;
