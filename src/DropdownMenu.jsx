import { useState } from "react";
import Menu from "@mui/material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function DropdownMenu() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const options = [
    {
      heading: "Heading 1",
      body: "Show some love to MUI",
    },
    {
      heading: "Heading 2",
      body: "Show all notification content",
    },
    {
      heading: "Heading 3",
      body: "Hide sensitive notification content",
    },
    {
      heading: "Heading 4",
      body: "Hide all notification content",
    },
  ];

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{
          bgcolor: "#0d1018",
          color: "#94A0B8",
          margin: "5px",
          border: "1px solid #212732",
          borderRadius: "16px",
        }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{
            color:"#94A0B8 !important"
          }}
        >
          <MoreHorizIcon />
          <ListItemText
            primary={options[selectedIndex].heading}
            secondary={options[selectedIndex].body}
            sx={{ marginLeft: "5px",
              color:"#94A0B8 !important"
             }}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option.heading}
            <br />
            {option.body}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default DropdownMenu;
