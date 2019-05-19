import React, { Component } from 'react';
import uuidv4 from 'uuid';
import PropTypes from 'prop-types';

import Box from './Box';
import { Colors, Types } from '../PropTypes';

/* TODO: make users, messages etc passable */
class Chatbox extends Component {
  activeUsers = {
    one: {
      name: 'Alexander Pierce',
      image: 'img/user1-128x128.jpg',
      side: 'left',
    },
    two: {
      name: 'Sarah Bullock',
      image: 'img/user3-128x128.jpg',
      side: 'right',
    },
  }

  messages = [{
    message: 'Is this template really for free? That\'s unbelievable!',
    timestamp: '23 Jan 2:00 pm',
    user: 'one',
  }, {
    message: 'You better believe it!',
    timestamp: '23 Jan 2:05 pm',
    user: 'two',
  }, {
    message: 'Working with AdminLTE on a great new app! Wanna join?',
    timestamp: '23 Jan 5:37 pm',
    user: 'one',
  }, {
    message: 'I would love to.',
    timestamp: '23 Jan 6:10 pm',
    user: 'two',
  }]

  contacts = [{
    name: 'Count Dracula',
    image: 'img/user1-128x128.jpg',
    lastTimestamp: '2/28/2015',
    lastMessage: 'How have you been? I was...',
  },
  {
    name: 'Sarah Doe',
    image: 'img/user7-128x128.jpg',
    lastTimestamp: '2/23/2015',
    lastMessage: 'How have you been? I was...',
  },
  {
    name: 'Nadia Jolie',
    image: 'img/user3-128x128.jpg',
    lastTimestamp: '2/20/2015',
    lastMessage: 'Ill call you back at...',
  },
  {
    name: 'Nora S. Vans',
    image: 'img/user5-128x128.jpg',
    lastTimestamp: '2/10/2015',
    lastMessage: 'Where is your new...',
  },
  {
    name: 'John K.',
    image: 'img/user6-128x128.jpg',
    lastTimestamp: '1/27/2015',
    lastMessage: 'Can I take a look at...',
  },
  {
    name: 'Kenneth M.',
    image: 'img/user8-128x128.jpg',
    lastTimestamp: '1/4/2015',
    lastMessage: 'Never mind I found...',
  }]

  /* eslint-disable-next-line class-methods-use-this */
  getMessage({ message, timestamp, user }, users) {
    const { name, image, side } = users[user];
    const otherSide = side === 'right' ? 'left' : 'right';
    const infoClass = side === 'right' ? ' right' : '';
    return (
      <div key={uuidv4()} className={`direct-chat-msg${infoClass}`}>
        <div className="direct-chat-info clearfix">
          <span className={`direct-chat-name pull-${side}`}>{name}</span>
          <span className={`direct-chat-timestamp pull-${otherSide}`}>{timestamp}</span>
        </div>
        <img className="direct-chat-img" src={image} alt="message user" />
        <div className="direct-chat-text">{message}</div>
      </div>
    );
  }

  getMessages() {
    return (
      <div className="direct-chat-messages">
        {this.messages.map(p => this.getMessage(p, this.activeUsers))}
      </div>
    );
  }

  getFooter() {
    const { type } = this.props;
    return (
      <form action="#" method="post">
        <div className="input-group">
          <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
          <span className="input-group-btn">
            <button type="button" className={`btn btn-${type} btn-flat`}>Send</button>
          </span>
        </div>
      </form>
    );
  }

  getBadge() {
    const { badgeColor = 'yellow' } = this.props;
    return (<span data-toggle="tooltip" title="3 New Messages" className={`badge bg-${badgeColor}`}>3</span>);
  }

  getContactsToggle() {
    const { contactsTitle = 'Contacts' } = this.props;
    return (
      <button
        type="button"
        className="btn btn-box-tool"
        data-toggle="tooltip"
        title={contactsTitle}
        data-widget="chat-pane-toggle"
      >
        <i className="fa fa-comments" />

      </button>
    );
  }

  /* eslint-disable-next-line class-methods-use-this */
  getContact({
    name, image, lastTimestamp, lastMessage, to,
  }) {
    return (
      <li key={uuidv4()}>
        <a href={to}>
          <img className="contacts-list-img" src={image} alt="User" />
          <div className="contacts-list-info">
            <span className="contacts-list-name">
              {name}
              <small className="contacts-list-date pull-right">{lastTimestamp}</small>
            </span>
            <span className="contacts-list-msg">{lastMessage}</span>
          </div>
        </a>
      </li>
    );
  }

  getContacts() {
    return (
      <div className="direct-chat-contacts">
        <ul className="contacts-list">
          {this.contacts.map(p => this.getContact(p))}
        </ul>
      </div>
    );
  }

  render() {
    const {
      id, type, iconClass, title, titleRight, collapsable, closable, async, loaded, noPadding,
    } = this.props;
    return (
      <Box
        id={id}
        type={type}
        title={title}
        collapsable={collapsable}
        closable={closable}
        badge={this.getBadge()}
        customOptions={this.getContactsToggle()}
        className={`direct-chat direct-chat-${type}`}
        footer={this.getFooter()}
        iconClass={iconClass}
        async={async}
        loaded={loaded}
        noPadding={noPadding}
        titleRight={titleRight}
      >
        {this.getMessages()}
        {this.getContacts()}
      </Box>
    );
  }
}

Chatbox.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(Types),
  badgeColor: PropTypes.oneOf(Colors),
  contactsTitle: PropTypes.string,
  iconClass: PropTypes.string,
  title: PropTypes.string,
  titleRight: PropTypes.bool,
  collapsable: PropTypes.bool,
  closable: PropTypes.bool,
  async: PropTypes.bool,
  loaded: PropTypes.bool,
  noPadding: PropTypes.bool,
};

Chatbox.defaultProps = {
  id: undefined,
  type: null,
  badgeColor: null,
  contactsTitle: 'Contacts',
  iconClass: null,
  title: null,
  titleRight: false,
  collapsable: false,
  closable: false,
  async: false,
  loaded: true,
  noPadding: false,
};

export default Chatbox;
