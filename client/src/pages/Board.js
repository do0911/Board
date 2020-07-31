import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";

import Boardpage from "./Boardpage";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    this._getBoard();
  }

  _getBoard = async () => {
    await axios.get(`/api/board`).then((data) => {
      this.setState({
        data: data.data,
      });
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">content</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data
              ? data.map((data) => (
                  <Boardpage
                    key={data.id}
                    num={data.id}
                    name={data.name}
                    content={data.content}
                  />
                ))
              : ""}
          </TableBody>
        </Table>
        {this.state.data ? "" : <LinearProgress />}
      </div>
    );
  }
}

export default Board;
