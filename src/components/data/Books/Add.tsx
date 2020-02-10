import React, { FC, FormEvent, ChangeEvent, useState } from "react";
import { makeStyles, Theme, createStyles, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import firebase from "FirebaseConfig";
import "firebase/firestore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200
      }
    },
    button: {
      margin: theme.spacing(1)
    }
  })
);

const Add: FC = () => {
  const classes = useStyles();
  const [name, setName] = useState("");

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const saveData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const collection = firebase.firestore().collection("books");
    const userRef = collection.add({ name });

    setName("");
  };

  return (
    <>
      <form autoComplete="off" className={classes.root} onSubmit={saveData}>
        <TextField
          required
          id="name"
          label="Name"
          onChange={changeName}
          value={name}
          variant="filled"
        />
        <Button
          className={classes.button}
          color="primary"
          startIcon={<SaveIcon />}
          type="submit"
          variant="contained"
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default Add;
