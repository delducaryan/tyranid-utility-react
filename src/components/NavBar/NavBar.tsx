import React, { useState, FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "./NavDrawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const Navbar: FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const navDrawerProps = {
    isOpen,
    toggleDrawer
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Roster Manager
          </Typography>
          <Button>Right Side</Button>
        </Toolbar>
      </AppBar>
      <NavDrawer {...navDrawerProps} />
    </>
  );
};

export default Navbar;
