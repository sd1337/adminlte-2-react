import React, { Component } from 'react';
/* eslint-disable-next-line camelcase */
import user2_160x160 from '../../adminlte/img/user2-160x160.jpg';

class Item extends Component {
  state = {}

  render() {
    return (
      <li>
        <ul className="menu">
          <li>
            {/* TODO: fix linter error */
              /* eslint-disable jsx-a11y/anchor-is-valid */}
            <a>
              <div className="pull-left">
                {/* eslint-disable-next-line camelcase */}
                <img src={user2_160x160} className="img-circle" alt="User" />
              </div>
              <h4>
                Support Team
                <small>
                  <i className="fa fa-clock-o" />
                  {' '}
                  5 mins
                </small>
              </h4>
              <p>Why not buy a new awesome theme?</p>
            </a>
          </li>
        </ul>
      </li>
    );
  }
}

export default Item;
