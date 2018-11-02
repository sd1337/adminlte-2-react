/* eslint-disable */
/* TODO: Fix pagination */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid';
import Pagination from 'react-bootstrap';

const Pagination = (size, noMargin, pullRight, pages, currentPage, showAll) => {
  const classNames = [
    'pagination',
    size ? `pagination-${size}` : null,
    noMargin ? 'no-margin' : null,
    pullRight ? 'pull-right' : null,
  ].filter(p => p).join(' ');
  return (
    <ul className="pagination pagination-sm no-margin pull-right">
      <li><a href="#">&laquo;</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">&raquo;</a></li>
    </ul>
  );
};

export default Pagination;
