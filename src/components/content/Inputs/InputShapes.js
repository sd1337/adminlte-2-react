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

export { OptionShape, ListOfValueShape, ValueShape, ArrayOfValueShape };
