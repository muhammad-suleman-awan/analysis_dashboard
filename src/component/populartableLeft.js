import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1", 159, 6.0, 24, 4.0),
  createData("2", 237, 9.0, 37, 4.3),
  createData("3", 262, 16.0, 24, 6.0),
  createData("4", 305, 3.7, 67, 4.3),
  createData("5", 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <div className=" w-11/12 sm:w-10/12">
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <colgroup span={1}></colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Ranking</TableCell>
              <TableCell align="righleftt">search keyword</TableCell>
              <TableCell align="left">User number</TableCell>
              <TableCell align="rileftght">Weekly increase &nbsp;(g)</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
