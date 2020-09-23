import React from "react";
import "./Header.css";
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />

        <div className="header_input">
          <Search />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header_center">
        <div className="header_option header_option--active">
          <Home fontSize="large" />
        </div>

        <div className="header_option">
          <Flag fontSize="large" />
        </div>

        <div className="header_option">
          <SubscriptionsOutlined fontSize="large" />
        </div>

        <div className="header_option">
          <StorefrontOutlined fontSize="large" />
        </div>

        <div className="header_option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>

        <IconButton>
          <Forum />
        </IconButton>

        <IconButton>
          <NotificationsActive />
        </IconButton>

        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
