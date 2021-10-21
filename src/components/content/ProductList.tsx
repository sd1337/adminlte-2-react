import React, { ReactNode } from 'react';

interface ProductListProps {
  inBox?: boolean,
  children: ReactNode,
}

type ProductListComponent = React.FC<ProductListProps>;

const ProductList : ProductListComponent = ({ inBox, children }: ProductListProps) => {
  const classes = ['products-list',
    inBox ? 'product-list-in-box' : ''].join(' ');
  return (
    <ul className={classes}>
      {children}
    </ul>
  );
};

ProductList.defaultProps = {
  inBox: false,
};

export default ProductList;
