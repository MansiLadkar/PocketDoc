import React from "react";
import { Button, Table } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import LabtestData from "../../components/LabtestData";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0C7ABF",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#0C7ABF",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function FindLabtest() {
  let history = useNavigate();

  const handleEdit = (
    id,
    name,
    contact,
    hospital_name,
    address,
    booking_date,
    type
  ) => {
    localStorage.setItem("Id", id);
    localStorage.getItem("Name", name);
    localStorage.getItem("Contact", contact);
    localStorage.getItem("Hospital_name", hospital_name);
    localStorage.getItem("Address", address);
    localStorage.getItem("Booking_date", booking_date);
    localStorage.getItem("Type", type);
  };

  const handleDelete = (id) => {
    var index = LabtestData.map(function (e) {
      return e.id;
    }).indexOf(id);

    LabtestData.splice(index, 1);

    history("/Dashboard/Labtest/FindLabtest");
  };
  return (
    <Fragment>
      <div className="App">
        <div className="navb">
          <Navbar />
        </div>
        <div className="content">
          <div style={{ margin: "8rem" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 1100 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">
                      Contact&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Hospital_Name&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Address&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Booking_date&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="right">Type&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">
                      Action&nbsp;
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {LabtestData && LabtestData.length > 0
                    ? LabtestData.map((item) => {
                        return (
                          <tr>
                            <td>{item.Name}</td>
                            <td>{item.Contact}</td>
                            <td>{item.Hospital_name}</td>
                            <td>{item.Address}</td>
                            <td>{item.Booking_date}</td>
                            <td>{item.Type}</td>
                            <td>
                              <Link to={"/Dashboard/Labtest/EditLabtest"}>
                                <Button
                                  onClick={() =>
                                    handleEdit(
                                      item.id,
                                      item.Name,
                                      item.Contact,
                                      item.Hospital_name,
                                      item.Address,
                                      item.Booking_date,
                                      item.Type
                                    )
                                  }
                                >
                                  Edit
                                </Button>
                              </Link>
                              &nbsp;
                              <Button onClick={() => handleDelete(item.id)}>
                                Delete
                              </Button>
                            </td>
                          </tr>
                        );
                      })
                    : "No data available"}
                </TableBody>
              </Table>
            </TableContainer>
            <br></br>
            <Link className="d-grid" to="/Dashboard/Labtest/AddLabtest">
              <Button size="lg">Create</Button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FindLabtest;
