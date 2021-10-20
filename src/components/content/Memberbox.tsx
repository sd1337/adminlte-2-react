import React, { Component } from 'react';
import uuidv4 from 'uuid';
import Box from './Box';
import { Types } from '../PropTypes';

interface MemberboxProps {
  id?: string,
  type: Types,
  title?: string,
  collapsable?: boolean,
  closable?: boolean,
  async?: boolean,
  viewAllLink?: string,
}

interface MemberboxState {
  users: any
}

class Memberbox extends Component<MemberboxProps, MemberboxState> {
  static defaultProps = {
    id: undefined,
    title: null,
    collapsable: false,
    closable: false,
    async: false,
    viewAllLink: '/',
  };

  state: MemberboxState = {
    users: null,
  };

  componentDidMount() {
    const that = this;
    setTimeout(() => { that.setState({ users: that.users }); }, 2000);
  }

  /* eslint-disable-next-line class-methods-use-this */
  getUser({ name, lastOnline, image }: any) {
    return (
      <li key={uuidv4()}>
        <img src={image} alt="User" />
        <a href="/" className="users-list-name">{name}</a>
        <span className="users-list-date">{lastOnline}</span>
      </li>
    );
  }

  getUsers(users: any) {
    if (!users) return null;
    return users.map((p: any) => this.getUser(p));
  }

  users = [{
    name: 'Alexander Pierce',
    lastOnline: 'Today',
    image: 'img/user1-128x128.jpg',
  }, {
    name: 'Norman',
    lastOnline: 'Yesterday',
    image: 'img/user8-128x128.jpg',
  }, {
    name: 'Jane',
    lastOnline: '12 Jan',
    image: 'img/user7-128x128.jpg',
  }, {
    name: 'John',
    lastOnline: '12 Jan',
    image: 'img/user6-128x128.jpg',
  }, {
    name: 'Alexander',
    lastOnline: '13 Jan',
    image: 'img/user2-160x160.jpg',
  }, {
    name: 'Sarah',
    lastOnline: '14 Jan',
    image: 'img/user5-128x128.jpg',
  }, {
    name: 'Nora',
    lastOnline: '15 Jan',
    image: 'img/user4-128x128.jpg',
  }, {
    name: 'Nadia',
    lastOnline: '15 Jan',
    image: 'img/user3-128x128.jpg',
  }];

  render() {
    const {
      id, type, title, collapsable, closable, viewAllLink,
    } = this.props;
    const { users } = this.state;
    const badge = <span className={`label label-${type}`}>8 New Members</span>;
    const footer = <a href={viewAllLink} className="uppercase">View All Users</a>;
    return (
      <Box id={id} type={type} title={title} collapsable={collapsable} closable={closable} badge={badge} footer={footer} footerClass="text-center" noPadding loaded={!!users}>
        <ul className="users-list clearfix">
          {this.getUsers(users)}
        </ul>
      </Box>
    );
  }
}

export default Memberbox;
