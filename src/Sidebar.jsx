import React from "react";
import DropdownMenu from "./DropdownMenu";
import MenuList from "./MenuList";

function Sidebar() {
  return (
    <div className="sidebar">
      <DropdownMenu />
      <MenuList />
    </div>
  );
}

export default Sidebar;
