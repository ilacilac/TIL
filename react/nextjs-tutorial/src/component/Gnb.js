import React from "react";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  const activeItem = "home";
  return (
    <Menu>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        // onClick={this.handleItemClick}
      />

      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        // onClick={this.handleItemClick}
      />

      <Menu.Item
        name="freinds"
        active={activeItem === "freinds"}
        // onClick={this.handleItemClick}
      />
    </Menu>
  );
}
