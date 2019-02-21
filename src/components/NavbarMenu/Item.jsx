import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
/* eslint-disable-next-line camelcase */
// import user2_160x160 from '../../adminlte/img/user2-160x160.jpg';

const Item = ({
  imageUrl, imageAlt, onClick, text, subText, when,
}) => (
  <li>
    {/* TODO: fix linter error */
            /* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
    <a onClick={onClick}>
      {imageUrl && (
      <div className="pull-left">
        {/* eslint-disable-next-line camelcase */}
        <img src={imageUrl} className="img-circle" alt={imageAlt} />
      </div>
      )}
      <h4>
        {text}
        {when && (
        <small>
          <i className="fa fa-clock-o" />
          {' '}
            5 mins
        </small>
        )}
      </h4>
      {subText && <p>{subText}</p>}
    </a>
  </li>
);

Item.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string,
  onClick: PropTypes.func,
  when: MomentPropTypes.momentObj,
};

Item.defaultProps = {
  imageUrl: undefined,
  imageAlt: undefined,
  subText: undefined,
  onClick: undefined,
  when: undefined,
};

export default Item;
