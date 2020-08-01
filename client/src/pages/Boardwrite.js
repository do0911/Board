import React, { useState } from "react";
import { post } from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
  button: {
    width: "15ch",
    marginTop: "3ch",
    marginLeft: "5ch",
  },
}));

const Boardwrite = () => {
  const classes = useStyles();
  const [id, setId] = useState("");
  const [content, setContent] = useState("");

  const idChange = (e) => {
    setId(e.target.value);
  };

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    boardwrite().then((response) => {
      console.log(response.data);
    });
    setContent("");
    setId("");
    window.location.reload();
  };

  const boardwrite = () => {
    const url = "/api/board";
    const formData = new FormData();
    formData.append("name", id);
    formData.append("content", content);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="ID를 입력하세요"
        value={id}
        onChange={idChange}
      />
      <TextField
        id="standard-basic"
        label="내용을 입력하세요"
        value={content}
        onChange={contentChange}
      />
      <Button
        variant="contained"
        size="small"
        color="primary"
        className={classes.button}
        onClick={submit}
      >
        입력
      </Button>
    </form>
  );
};

export default Boardwrite;
