import React, { ReactNode } from 'react';
import { TabPane } from 'react-bootstrap';

export interface TabContentProps {
  eventKey: string,
  // eslint-disable-next-line react/no-unused-prop-types
  title?: string,
  children: ReactNode
}

type TabContentComponent = React.FC<TabContentProps>;

const TabContent: TabContentComponent = ({ eventKey, children }: TabContentProps) => (
  <TabPane eventKey={eventKey}>
    {children}
  </TabPane>
);

export default TabContent;
