
const simpleOptions = ['a', 'b'];
const complexOptions = [{ text: 'aText', value: 'aValue' }, { text: 'bText', value: 'bValue' }];
const disabledOptions = [{ text: 'a', value: 'a' }, { text: 'b', value: 'b', disabled: true }];
const getDOMNodeByClassName = (p, classname) => p.getDOMNode().getElementsByClassName(classname);
const getDOMNodeByQuerySelector = (p, selector) => p.getDOMNode().querySelector(selector);
const getDOMNodeByQuerySelectorAll = (p, selector) => p.getDOMNode().querySelectorAll(selector);

export {
  simpleOptions, complexOptions, disabledOptions, getDOMNodeByClassName,
  getDOMNodeByQuerySelector, getDOMNodeByQuerySelectorAll,
};
