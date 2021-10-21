import React from 'react';

import { Types } from '../PropTypes';

interface ProductListItemProps {
  description?: string,
  title?: string,
  label?: string,
  labelType?: Types,
  image?: string,
  to?: string,
}

type ProductListItemComponent = React.FC<ProductListItemProps>;

const ProductListItem: ProductListItemComponent = ({
  description, title, label, labelType = 'info', image, to,
}: ProductListItemProps) => (
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

ProductListItem.defaultProps = {
  description: undefined,
  title: undefined,
  label: undefined,
  labelType: 'info',
  image: undefined,
  to: '/',
};

export default ProductListItem;
