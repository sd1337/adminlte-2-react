declare type Colors = 'light-blue' | 'aqua' | 'green' | 'yellow' | 'red' | 'gray' | 'navy' | 'teal' | 'purple' | 'orange' | 'maroon' | 'black';
declare type Types = 'default' | 'info' | 'danger' | 'warning' | 'success' | 'primary';
declare type Sizes = 'xs' | 'sm' | 'md' | 'lg';
declare type FormTypes = 'warning' | 'success' | 'error';
declare type Themes = 'black-light' | 'black' | 'blue' | 'blue-light' | 'green' | 'green-light' | 'purple' | 'purple-light' | 'red' | 'red-light' | 'yellow' | 'yellow-light';
declare const types: {
    byType: {
        default: {
            type: string;
            color: string;
            colorCode: string;
        };
        primary: {
            type: string;
            color: string;
            colorCode: string;
        };
        info: {
            type: string;
            color: string;
            colorCode: string;
        };
        success: {
            type: string;
            color: string;
            colorCode: string;
        };
        warning: {
            type: string;
            color: string;
            colorCode: string;
        };
        danger: {
            type: string;
            color: string;
            colorCode: string;
        };
    };
    byColor: {
        gray: {
            type: string;
            color: string;
            colorCode: string;
        };
        lightBlue: {
            type: string;
            color: string;
            colorCode: string;
        };
        aqua: {
            type: string;
            color: string;
            colorCode: string;
        };
        green: {
            type: string;
            color: string;
            colorCode: string;
        };
        yellow: {
            type: string;
            color: string;
            colorCode: string;
        };
        red: {
            type: string;
            color: string;
            colorCode: string;
        };
    };
    byColorCode: {
        d2d6de: {
            type: string;
            color: string;
            colorCode: string;
        };
        '3c8dbc': {
            type: string;
            color: string;
            colorCode: string;
        };
        '00c0ef': {
            type: string;
            color: string;
            colorCode: string;
        };
        '00a65a': {
            type: string;
            color: string;
            colorCode: string;
        };
        f39c12: {
            type: string;
            color: string;
            colorCode: string;
        };
        f56954: {
            type: string;
            color: string;
            colorCode: string;
        };
    };
};
export { Colors, Types, Sizes, FormTypes, Themes, types as TypeMappings, };
//# sourceMappingURL=PropTypes.d.ts.map