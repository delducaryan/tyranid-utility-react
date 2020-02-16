import React, { FC, useState, useEffect } from "react";
import MatList from "@material-ui/core/List";
import firebase from "FirebaseConfig";
import "firebase/firestore";
import Book from "models/Book";
import {
  ListSubheader,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  })
);

const collection = firebase.firestore().collection("books");

const List: FC = () => {
  const classes = useStyles();
  const [docs, setDocs] = useState<Book[]>([]);

  useEffect(() => {
    const observer = collection.onSnapshot(snapshot =>
      setDocs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Book)))
    );

    return () => observer();
  }, []);

  return (
    <>
      <MatList
        className={classes.root}
        subheader={<ListSubheader>Books</ListSubheader>}
      >
        {docs.map((doc, i) => (
          <ListItem divider key={i}>
            <ListItemText primary={doc.name} />
          </ListItem>
        ))}
      </MatList>
    </>
  );
};

export default List;
