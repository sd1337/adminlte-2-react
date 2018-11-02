import React from 'react';
import PropTypes from 'prop-types';

import { Types } from '../PropTypes';

const ProductListItem = ({
  description, title, label, labelType = 'info', image, to,
}) => (
  <li className="item">
    <div className="product-img">
      <img src={image} alt="Product" />
    </div>
    <div className="product-info">
      <a href={to} className="product-title">
        {title}
        <span className={`label label-${labelType} pull-right`}>{label}</span>
      </a>
      <span className="product-description">
        {description}
      </span>
    </div>
  </li>
);

ProductListItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  labelType: PropTypes.oneOf(Types),
  image: PropTypes.string,
  to: PropTypes.string,
};

ProductListItem.defaultProps = {
  description: null,
  title: null,
  label: false,
  labelType: 'info',
  image: null,
  to: '/',
};

export default ProductListItem;
