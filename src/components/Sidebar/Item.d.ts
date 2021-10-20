import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Colors, Types } from '../PropTypes';
declare type ItemComponent = React.FC<ItemProps>;
interface ItemLabel {
    small: boolean;
    color: Colors;
    text: string;
    type: Types;
}
interface ItemProps extends RouteComponentProps {
    id?: string;
    children?: ItemComponent;
    icon?: string;
    text: string;
    labels?: ItemLabel | ItemLabel[];
    color?: Colors;
    activeOn?: string | string[];
    to?: string;
    highlighted?: boolean;
}
declare const _default: React.ComponentClass<Pick<ItemProps, "children" | "text" | "to" | "icon" | "color" | "id" | "labels" | "activeOn" | "highlighted">, any> & import("react-router").WithRouterStatics<ItemComponent>;
export default _default;
//# sourceMappingURL=Item.d.ts.map