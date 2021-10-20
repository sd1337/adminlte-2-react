import React, { Component, ReactElement, ReactNode } from 'react';
import {
  TabContent as BsTabContent, Nav, NavItem, TabContainer,
} from 'react-bootstrap';
import uuidv4 from 'uuid';
import TabTitle from './TabTitle';
import TabContent from './TabContent';

interface TabsProps {
  activeKey?: string,
  defaultActiveKey?: string,
  onSelect?: Function,
  children: ReactNode,
  pullRight?: boolean,
  contentHeight: number | string,
  mountOnEnter?: boolean,
  unmountOnExit?: boolean,
  id?: string,
  icon?: string,
  title?: string,
  titleLeft?: boolean,
  onChange?: Function,
}

interface TabsState {
  stateActiveKey?: string
}

class Tabs extends Component<TabsProps, TabsState> {
  static defaultProps = {
    activeKey: null,
    defaultActiveKey: null,
    onSelect: null,
    pullRight: false,
    contentHeight: null,
    mountOnEnter: false,
    unmountOnExit: false,
    id: uuidv4(),
    icon: null,
    title: null,
    titleLeft: false,
    onChange: undefined,
  };

  constructor(props: TabsProps) {
    super(props);
    const { activeKey, defaultActiveKey } = props;
    this.state = { stateActiveKey: activeKey || defaultActiveKey };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(activeKeyParam: string) {
    const { stateActiveKey } = this.state;
    const { onSelect } = this.props;
    if (stateActiveKey !== activeKeyParam) {
      this.setState({ stateActiveKey: activeKeyParam });
      if (onSelect) { onSelect(activeKeyParam); }
    }
  }

  render() {
    const {
      children, pullRight = false, contentHeight, mountOnEnter = false,
      unmountOnExit = false, id = uuidv4(), icon, title, titleLeft = false, activeKey,
      onChange,
    } = this.props;
    const { stateActiveKey } = this.state;
    const localChildren: ReactNode = children && (children as []).length ? (children as ReactNode) : [children] as ReactNode;
    return (
      <TabContainer
        id={id}
        activeKey={activeKey || stateActiveKey}
        onSelect={this.onSelect}
        onChange={onChange}
      >
        <div className="nav-tabs-custom">
          <Nav bsStyle="tabs" role="tablist" pullRight={pullRight} bsClass="nav">
            {(localChildren as Array<ReactElement>).filter((p) => p.type === TabContent).map((p) => (
              <NavItem
                key={p.props.eventKey}
                eventKey={p.props.eventKey}
              >
                {p.props.title}
              </NavItem>
            ))}
            <TabTitle icon={icon} title={title} titleLeft={titleLeft} />
          </Nav>
          <BsTabContent
            bsclass="tab"
            animation={false}
            mountOnEnter={mountOnEnter}
            unmountOnExit={unmountOnExit}
            componentClass="div"
            style={{ height: contentHeight || 'auto' }}
          >
            {children}
          </BsTabContent>
        </div>
      </TabContainer>
    );
  }
}

export default Tabs;
