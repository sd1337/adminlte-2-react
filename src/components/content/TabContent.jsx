import React from 'react';
import { TabPane } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TabContent = ({ eventKey, children }) => (
  <TabPane eventKey={eventKey}>
    {children}
  </TabPane>
);

TabContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  eventKey: PropTypes.string.isRequired,
};

export default TabContent;
