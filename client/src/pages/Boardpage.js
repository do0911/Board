import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const Boardpage = ({ num, name, content }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {num}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{content}</TableCell>
    </TableRow>
  );
};

export default Boardpage;
