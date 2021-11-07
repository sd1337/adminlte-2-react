export type Colors = 'light-blue' | 'aqua' | 'green' | 'yellow' | 'red' | 'gray' | 'navy' | 'teal' | 'purple' | 'orange' | 'maroon' | 'black';
export type Types = 'default' | 'info' | 'danger' | 'warning' | 'success' | 'primary';
export type Sizes = 'xs' | 'sm' | 'md' | 'lg';
export type FormTypes = 'warning' | 'success' | 'error';
export type Themes = 'black-light' | 'black' | 'blue' | 'blue-light' | 'green' | 'green-light' |
'purple' | 'purple-light' | 'red' | 'red-light' | 'yellow' | 'yellow-light';

type TypeDesc = {
  type: string,
  color: string,
  colorCode: string,
};

const localTypes: {
  default: TypeDesc,
  primary: TypeDesc,
  info: TypeDesc,
  success: TypeDesc,
  warning: TypeDesc,
  danger: TypeDesc
} = {
  default: {
    type: 'default',
    color: 'gray',
    colorCode: '#d2d6de',
  },
  primary: {
    type: 'primary',
    color: 'light-blue',
    colorCode: '#3c8dbc',
  },
  info: {
    type: 'info',
    color: 'aqua',
    colorCode: '#00c0ef',
  },
  success: {
    type: 'success',
    color: 'green',
    colorCode: '#00a65a',
  },
  warning: {
    type: 'warning',
    color: 'yellow',
    colorCode: '#f39c12',
  },
  danger: {
    type: 'danger',
    color: 'red',
    colorCode: '#f56954',
  },
};
const types = {
  byType: localTypes,
  byColor: {
    'light-blue': localTypes.primary,
    aqua: localTypes.info,
    green: localTypes.success,
    yellow: localTypes.warning,
    red: localTypes.danger,
    gray: localTypes.default,
    navy: localTypes.default,
    teal: localTypes.default,
    purple: localTypes.default,
    orange: localTypes.default,
    maroon: localTypes.default,
    black: localTypes.default,
  },
  byColorCode: {
    d2d6de: localTypes.default,
    '3c8dbc': localTypes.primary,
    '00c0ef': localTypes.info,
    '00a65a': localTypes.success,
    f39c12: localTypes.warning,
    f56954: localTypes.danger,
  },
};

export type Dictionary = { [fieldName: string]: any };

// export type Colors

export {
  // eslint-disable-next-line import/prefer-default-export
  types as TypeMappings,
};
