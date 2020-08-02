import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Boarddelete from "./Boarddelete";

const Boardpage = ({ date, num, name, content, refresh }) => {
  console.log(date);
  return (
    <TableRow>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{content}</TableCell>
      <TableCell component="th" scope="row">
        {date}
      </TableCell>
      <TableCell align="right">
        <Boarddelete refresh={refresh} num={num} />
      </TableCell>
    </TableRow>
  );
};

export default Boardpage;
