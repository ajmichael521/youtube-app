import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setinputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="http://i.gzn.jp/img/2017/08/30/youtube-big-changes/00.png"
          alt=""
        />
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setinputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search Youtube"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <LibraryAddCheckIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsNoneIcon className="header__icon" />
        <AccountCircleIcon className="header__icon" />
      </div>
    </div>
  );
}

export default Header;
