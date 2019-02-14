/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

function fireEvent(el, etype) {
  if (el.fireEvent) {
    el.fireEvent(`on${etype}`);
  } else {
    const evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    evObj.which = 1;
    el.dispatchEvent(evObj);
  }
}

configure({ adapter: new Adapter() });
export {
  shallow, mount, render, fireEvent,
};
export default Enzyme;
