import PropTypes from 'prop-types';
declare const ValueShape: PropTypes.Requireable<string | number | object>;
declare const DateValueShape: PropTypes.Requireable<string | import("moment").Moment>;
declare const OptionShape: PropTypes.Requireable<string | number | PropTypes.InferProps<{
    value: PropTypes.Validator<string | number | object>;
    text: PropTypes.Requireable<string | number>;
    disabled: PropTypes.Requireable<boolean>;
    checked: PropTypes.Requireable<boolean>;
}>>;
declare const ListOfValueShape: PropTypes.Requireable<(string | number | PropTypes.InferProps<{
    value: PropTypes.Validator<string | number | object>;
    text: PropTypes.Requireable<string | number>;
    disabled: PropTypes.Requireable<boolean>;
    checked: PropTypes.Requireable<boolean>;
}> | null | undefined)[]>;
declare const ArrayOfValueShape: PropTypes.Requireable<(string | number | object | null | undefined)[]>;
declare const SharedInputProps: {
    name: PropTypes.Requireable<string>;
    id: PropTypes.Requireable<string>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    onBlur: PropTypes.Requireable<(...args: any[]) => any>;
    onFocus: PropTypes.Requireable<(...args: any[]) => any>;
    placeholder: PropTypes.Requireable<string>;
    disabled: PropTypes.Requireable<boolean>;
    readOnly: PropTypes.Requireable<boolean>;
};
declare const SharedInputDefaultProps: {
    name: undefined;
    id: undefined;
    onChange: undefined;
    onBlur: undefined;
    onFocus: undefined;
    placeholder: undefined;
    disabled: boolean;
    readOnly: boolean;
};
declare const SharedDateProps: {
    disabled: PropTypes.Requireable<boolean>;
    required: PropTypes.Requireable<boolean>;
    readOnly: PropTypes.Requireable<boolean>;
    showClearDate: PropTypes.Requireable<boolean>;
    inputIconPosition: PropTypes.Requireable<string>;
    noBorder: PropTypes.Requireable<boolean>;
    block: PropTypes.Requireable<boolean>;
    small: PropTypes.Requireable<boolean>;
    regular: PropTypes.Requireable<boolean>;
};
declare const SharedDateDefaultProps: {
    disabled: boolean;
    required: boolean;
    readOnly: boolean;
    showClearDate: boolean;
    noBorder: boolean;
    block: boolean;
    small: boolean;
    regular: boolean;
    inputIconPosition: null;
};
export { OptionShape, ListOfValueShape, ValueShape, ArrayOfValueShape, SharedDateProps, SharedDateDefaultProps, DateValueShape, SharedInputProps, SharedInputDefaultProps, };
//# sourceMappingURL=InputShapes.d.ts.map