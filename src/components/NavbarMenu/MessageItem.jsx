import React from 'react';
import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable-next-line camelcase */
import './MessageItem.css';

const MessageItem = ({
  imageUrl, imageAlt, onClick, text, subText, when, whenFormats: {
    minutes: minutesText, hours: hoursText, yesterday: yesterdayText, days: daysText, today,
  },
}) => {
  const duration = moment.duration(moment().diff(when));
  const minutes = duration.asMinutes();
  let whenText;
  if (minutes < 60) {
    whenText = `${minutes.toFixed(0)} ${minutesText}`;
  } else {
    const hours = duration.asHours();
    if (hours < 12) {
      whenText = `${hours.toFixed(0)} ${hoursText}`;
    } else if (hours < 24) {
      whenText = today;
    } else {
      const days = duration.asDays();
      if (days.toFixed(0) === '1') {
        whenText = yesterdayText;
      } else {
        whenText = when.format(daysText);
      }
    }
  }
  return (
    <li className="message-item">
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
              <FontAwesomeIcon icon={['far', 'clock']} />
              {' '}
              {whenText}
            </small>
          )}
        </h4>
        {subText && <p>{subText}</p>}
      </a>
    </li>
  );
};

MessageItem.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string,
  onClick: PropTypes.func,
  when: MomentPropTypes.momentObj,
  whenFormats: PropTypes.shape({
    minutes: PropTypes.string,
    hours: PropTypes.string,
    today: PropTypes.string,
    yesterday: PropTypes.string,
    days: PropTypes.string,
  }),
};

MessageItem.defaultProps = {
  imageUrl: undefined,
  imageAlt: undefined,
  subText: undefined,
  onClick: undefined,
  when: undefined,
  whenFormats: {
    minutes: 'mins',
    hours: 'hours',
    today: 'today',
    yesterday: 'yesterday',
    days: 'DD.MM.YYYY',
  },
};

export default MessageItem;
