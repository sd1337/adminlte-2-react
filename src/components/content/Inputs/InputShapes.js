import PropTypes from 'prop-types';


const ValueShape = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.object,
]);

const optionType = PropTypes.shape({
  value: ValueShape.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
});
const simpleOptionType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);
const OptionShape = PropTypes.oneOfType([
  optionType,
  simpleOptionType,
]);
const ListOfValueShape = PropTypes.arrayOf(OptionShape);
const ArrayOfValueShape = PropTypes.arrayOf(ValueShape);

const SharedDateProps = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  showClearDate: PropTypes.bool,
  inputIconPosition: PropTypes.oneOf(['before', 'after']),
  noBorder: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  regular: PropTypes.bool,
};

const SharedDateDefaultProps = {
  disabled: false,
  required: false,
  readOnly: false,
  showClearDate: false,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  inputIconPosition: null,
};

export {
  OptionShape, ListOfValueShape, ValueShape, ArrayOfValueShape,
  SharedDateProps, SharedDateDefaultProps,
};
