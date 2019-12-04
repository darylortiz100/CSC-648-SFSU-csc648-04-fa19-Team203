import React, { Component } from 'react';
import Header from './Components/Header';
import { retrieveCookie } from './Components/Cookies';
import './app.css';
import ListRooms from './Components/ListRooms';
import UserSearch from './Components/UserSearch';

export default class Admin extends Component {
  state = {
    userid: retrieveCookie('userid')
  };

  render() {
    return (
      <body>
        <div className="homePage">
          <Header userid={this.state.userid} />
        </div>

        <div className="sidebarContainer">
          <div className="sidebarAdmin">Admin Control</div>

          <div className="sidebarNav">
            <li>
              <a href="/Lobby">Lobby</a>
            </li>
          </div>

          <div className="sidebarNav">
            <li>
              <a href="/About">About</a>
            </li>
          </div>

          <div className="sidebarNav">
            <li>
              <a href="/Profile">Profile</a>
            </li>
          </div>

          <div className="sidebarNav">
            <li>
              <a href="/Custom">Custom Cards</a>
            </li>
          </div>

          <div className="sidebarNav">
            <li>
              <a href="/Registration">Registration</a>
            </li>
          </div>

          <div className="sidebarNav">
            <li>
              <a href="/FAQ">FAQ</a>
            </li>
          </div>
        </div>

        <div className="column2">
          <h2>Active Game Rooms</h2>
          <ListRooms url="games/allgames" />
          <h5># of Active Game Rooms:</h5>
        </div>

        <div className="admin_usercol">
          <h2>Users</h2>
          <UserSearch userid="a " />
          <h5># of Users:</h5>
        </div>
      </body>
    );
  }
}
