import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Tab, TabContent, Nav, NavItem,
} from 'react-bootstrap';
import uuidv4 from 'uuid';
import { splitIcon } from '../Utilities';

const { Container: TabContainer } = Tab;
class Tabs extends Component {
  state = {
    activeKey: null,
  }

  constructor(props) {
    super(props);
    const { activeKey } = props;
    this.state.activeKey = activeKey;
  }

  onSelect(activeKeyParam) {
    const { activeKey } = this.state;
    const { onSelect } = this.props;
    if (activeKey !== activeKeyParam) {
      this.setState({ activeKey: activeKeyParam });
      if (onSelect) { onSelect(activeKeyParam); }
    }
  }

  render() {
    const {
      children, pullRight = false, contentHeight, mountOnEnter = false,
      unmountOnExit = false, id = uuidv4(), icon, title, titleLeft = false,
    } = this.props;
    const { activeKey } = this.state;
    const hasIcon = !!(icon);
    const localIcon = hasIcon ? splitIcon(icon) : null;
    const hasTitle = !!(title);
    const hasIconOrHeader = hasIcon || hasTitle;
    const localChildren = children && children.length ? children : [children];
    return (
      <TabContainer id={id} activeKey={activeKey} onSelect={this.onSelect}>
        <div className="nav-tabs-custom">
          <Nav bsStyle="tabs" role="tablist" pullRight={pullRight} bsClass="nav">
            {localChildren.map(p => (
              <NavItem
                key={uuidv4()}
                eventKey={p.props.eventKey}
              >
                {p.props.title}
              </NavItem>
            ))}
            {hasIconOrHeader && (
              <li className={`header${titleLeft ? ' pull-left' : ''}`}>
                {hasIcon && <FontAwesomeIcon icon={localIcon} />}
                {hasTitle ? ` ${title}` : ''}
              </li>
            )}
          </Nav>
          <TabContent
            bsclass="tab"
            animation={false}
            mountOnEnter={mountOnEnter}
            unmountOnExit={unmountOnExit}
            componentClass="div"
            style={{ height: contentHeight || 'auto' }}
          >
            {children}
          </TabContent>
        </div>
      </TabContainer>
    );
  }
}

Tabs.propTypes = {
  activeKey: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pullRight: PropTypes.bool,
  contentHeight: PropTypes.number,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  titleLeft: PropTypes.bool,
};

Tabs.defaultProps = {
  onSelect: null,
  pullRight: false,
  contentHeight: null,
  mountOnEnter: false,
  unmountOnExit: false,
  id: uuidv4(),
  icon: null,
  title: null,
  titleLeft: false,
};

export default Tabs;
