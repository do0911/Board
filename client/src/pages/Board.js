import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";

import Boardpage from "./Boardpage";
import Boardwrite from "./Boardwrite";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
    this.refresh();
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

  refresh = () => {
    this.setState({
      data: "",
    });
    this._getBoard();
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">content</TableCell>
              <TableCell>Date</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data
              ? data.map((data) => (
                  <Boardpage
                    refresh={this.refresh}
                    key={data.id}
                    date={data.date}
                    num={data.id}
                    name={data.name}
                    content={data.content}
                  />
                ))
              : ""}
          </TableBody>
        </Table>
        {this.state.data ? "" : <LinearProgress />}
        <Boardwrite refresh={this.refresh} />
      </div>
    );
  }
}

export default Board;
