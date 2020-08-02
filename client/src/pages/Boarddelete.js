import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

class Boarddelete extends Component {
  handleClick = (num) => {
    const url = "/api/board/" + num;
    axios.delete(url);
    this.props.refresh();
  };

  render() {
    return (
      <div>
        <IconButton
          aria-label="delete"
          onClick={(e) => {
            this.handleClick(this.props.num);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    );
  }
}

export default Boarddelete;
