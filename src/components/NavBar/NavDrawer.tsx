import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  fullList: {
    width: "auto"
  },
  list: {
    width: 250
  }
});

const NavDrawer: FC<{ isOpen: boolean; toggleDrawer: () => void }> = props => {
  const { isOpen, toggleDrawer } = props;
  const classes = useStyles();

  return (
    <Drawer open={isOpen} onClose={toggleDrawer}>
      <div className={classes.list} onClick={toggleDrawer}>
        <List>
          <ListItem button exact component={NavLink} to="/" key="home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home"></ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/books" key="books">
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Books"></ListItemText>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default NavDrawer;
