import React, { Component, ReactElement } from 'react';
import {
  TabContent as BsTabContent, Nav, NavItem, TabContainer,
} from 'react-bootstrap';
import uuidv4 from 'uuid';
import TabTitle from './TabTitle';
import TabContent from './TabContent';

type TabContentType = typeof TabContent;

interface TabsProps {
  activeKey?: string,
  defaultActiveKey?: string,
  onSelect?: Function,
  children: TabContentType | TabContentType[],
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
    const localChildren: ReactElement[] = children && (children as []).length ? (children as []) : [children as ReactElement] as ReactElement[];
    return (
      <TabContainer
        id={id}
        activeKey={activeKey || stateActiveKey}
        onSelect={this.onSelect as any}
        onChange={onChange as any}
      >
        <div className="nav-tabs-custom">
          <Nav bsStyle="tabs" role="tablist" pullRight={pullRight} bsClass="nav">
            {(localChildren).filter((p) => p.type === TabContent).map((p) => (
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
            bsClass="tab"
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
