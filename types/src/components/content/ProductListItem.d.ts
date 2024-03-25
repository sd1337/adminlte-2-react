import React from 'react';
import { Types } from '../PropTypes';
interface ProductListItemProps {
    description?: string;
    title?: string;
    label?: string;
    labelType?: Types;
    image?: string;
    to?: string;
}
type ProductListItemComponent = React.FC<ProductListItemProps>;
declare const ProductListItem: ProductListItemComponent;
export default ProductListItem;
//# sourceMappingURL=ProductListItem.d.ts.map