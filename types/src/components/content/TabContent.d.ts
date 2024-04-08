import React, { ReactNode } from 'react';
export interface TabContentProps {
    eventKey: string;
    title?: string;
    children: ReactNode;
}
type TabContentComponent = React.FC<TabContentProps>;
declare const TabContent: TabContentComponent;
export default TabContent;
//# sourceMappingURL=TabContent.d.ts.map