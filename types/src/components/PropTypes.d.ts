export type Colors = 'light-blue' | 'aqua' | 'green' | 'yellow' | 'red' | 'gray' | 'navy' | 'teal' | 'purple' | 'orange' | 'maroon' | 'black';
export type Types = 'default' | 'info' | 'danger' | 'warning' | 'success' | 'primary';
export type Sizes = 'xs' | 'sm' | 'md' | 'lg';
export type FormTypes = 'warning' | 'success' | 'error';
export type Themes = 'black-light' | 'black' | 'blue' | 'blue-light' | 'green' | 'green-light' | 'purple' | 'purple-light' | 'red' | 'red-light' | 'yellow' | 'yellow-light';
type TypeDesc = {
    type: string;
    color: string;
    colorCode: string;
};
declare const types: {
    byType: {
        default: TypeDesc;
        primary: TypeDesc;
        info: TypeDesc;
        success: TypeDesc;
        warning: TypeDesc;
        danger: TypeDesc;
    };
    byColor: {
        'light-blue': TypeDesc;
        aqua: TypeDesc;
        green: TypeDesc;
        yellow: TypeDesc;
        red: TypeDesc;
        gray: TypeDesc;
        navy: TypeDesc;
        teal: TypeDesc;
        purple: TypeDesc;
        orange: TypeDesc;
        maroon: TypeDesc;
        black: TypeDesc;
    };
    byColorCode: {
        d2d6de: TypeDesc;
        '3c8dbc': TypeDesc;
        '00c0ef': TypeDesc;
        '00a65a': TypeDesc;
        f39c12: TypeDesc;
        f56954: TypeDesc;
    };
};
export type Dictionary = {
    [fieldName: string]: any;
};
export { types as TypeMappings, };
//# sourceMappingURL=PropTypes.d.ts.map