import React, { ReactNode } from 'react';
import { TabPane } from 'react-bootstrap';

interface TabContentProps {
  eventKey: string,
  children: ReactNode
}

type TabContentComponent = React.FC<TabContentProps>;

const TabContent: TabContentComponent = ({ eventKey, children }: TabContentProps) => (
  <TabPane eventKey={eventKey}>
    {children}
  </TabPane>
);

export default TabContent;
