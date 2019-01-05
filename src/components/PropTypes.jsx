
const Colors = ['light-blue', 'aqua', 'green', 'yellow', 'red', 'gray', 'navy', 'teal', 'purple', 'orange', 'maroon', 'black'];
const Types = ['default', 'info', 'danger', 'warning', 'success', 'primary'];
const Sizes = ['xs', 'sm', 'md', 'lg'];
const FormTypes = ['warning', 'success', 'error'];
const Themes = ['black-light', 'black', 'blue', 'blue-light', 'green', 'green-light',
  'purple', 'purple-light', 'red', 'red-light', 'yellow', 'yellow-light'];

const localTypes = {
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
    gray: localTypes.default,
    lightBlue: localTypes.primary,
    aqua: localTypes.info,
    green: localTypes.success,
    yellow: localTypes.warning,
    red: localTypes.danger,
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

export {
  Colors, Types, Sizes, FormTypes, Themes, types as TypeMappings,
};
