import React, { FC, useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MuiList from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Snackbar from "@material-ui/core/Snackbar";
import DeleteIcon from "@material-ui/icons/Delete";
import Alert from "@material-ui/lab/Alert";

import firebase from "FirebaseConfig";
import "firebase/firestore";

import Book from "models/Book";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      backgroundColor: theme.palette.background.paper,
      maxWidth: 360,
      width: "100%"
    }
  })
);

const collection = firebase.firestore().collection("books");

const List: FC = () => {
  const classes = useStyles();
  const [deletedBook, setDeletedBook] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [docs, setDocs] = useState<Book[]>([]);
  const [selectedId, setSelectedId] = useState(-1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const observer = collection.onSnapshot(snapshot => {
      const collection = snapshot.docs.map(
        doc => ({ id: doc.id, ...doc.data() } as Book)
      );

      collection.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA > nameB) {
          return 1;
        } else if (nameA < nameB) {
          return -1;
        } else {
          return 0;
        }
      });

      setDocs(collection);
    });

    return () => observer();
  }, []);

  const clickDelete = (i: number) => {
    setSelectedId(i);
    setDialogOpen(true);
  };

  const closeDialog = (response: boolean) => {
    setDialogOpen(false);

    if (response) {
      setDeletedBook(docs[selectedId].name);

      collection
        .doc(docs[selectedId].id)
        .delete()
        .then(() => setSnackbarOpen(true));
    }

    setSelectedId(-1);
  };

  return (
    <>
      <MuiList
        className={classes.list}
        subheader={
          <ListSubheader>
            Books
            <Divider />
          </ListSubheader>
        }
      >
        <div>
          {docs.map((doc, i) => (
            <div key={i}>
              <ListItem
                button
                divider={selectedId !== i}
                onClick={() => setSelectedId(i)}
              >
                <ListItemText primary={doc.name} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => clickDelete(i)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Collapse in={selectedId === i}>
                <ListItem divider>
                  <ListItemText primary={"Temp"} />
                </ListItem>
              </Collapse>
            </div>
          ))}
        </div>
      </MuiList>
      <Dialog open={dialogOpen}>
        <DialogTitle>{"Delete this book?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedId > -1 ? docs[selectedId].name : ""} will be deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog(false)}>No</Button>
          <Button onClick={() => closeDialog(true)}>Yes</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        autoHideDuration={3000}
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert elevation={6} severity="success" variant="filled">
          {deletedBook} has been deleted.
        </Alert>
      </Snackbar>
    </>
  );
};

export default List;
