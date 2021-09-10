import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import Home from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import HistoryIcon from "@material-ui/icons/History";
import YouTubeIcon from "@material-ui/icons/YouTube";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={Home} title="Home" />
      <SidebarRow Icon={ExploreIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={LibraryAddIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={YouTubeIcon} title="Your Videos" />
      <hr />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpIcon} title="Liked Videos" />
    </div>
  );
}

export default Sidebar;
