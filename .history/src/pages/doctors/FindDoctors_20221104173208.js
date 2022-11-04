import React from "react";
import { Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorData from "../../components/DoctorData";
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
import Item from "antd/lib/list/Item";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function FindDoctors() {
  let history = useNavigate();

  const handleEdit = (
    id,
    name,
    age,
    gender,
    contact,
    degree,
    specialization
  ) => {
    localStorage.setItem("Id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("Contact", contact);
    localStorage.setItem("Degree", degree);
    localStorage.setItem("Specialization", specialization);
  };

  const handleDelete = (id) => {
    var index = DoctorData.map(function (e) {
      return e.id;
    }).indexOf(id);

    DoctorData.splice(index, 1);

    history("/Dashboard/Doctors/FindDoctors");
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
              <Table sx={{ minWidth: 800 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Age</StyledTableCell>
                    <StyledTableCell align="right">
                      Gender&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Contact No&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Degree&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Specialization&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Action&nbsp;
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <tbody>
                  {DoctorData && DoctorData.length > 0
                    ? DoctorData.map((item) => {
                        return (
                          <tr>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.Gender}</td>
                            <td>{item.Contact}</td>
                            <td>{item.Degree}</td>
                            <td>{item.Specialization}</td>
                            <td>
                              <Link to={"/Dashboard/Doctors/EditDoctors"}>
                                <Button
                                  onClick={() =>
                                    handleEdit(
                                      item.id,
                                      item.Name,
                                      item.Age,
                                      item.Gender,
                                      item.Contact,
                                      item.Degree,
                                      item.Specialization
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
                </tbody>
              </Table>
            </TableContainer>

            <br></br>
            <Link className="d-grid" to="/Dashboard/Doctors/AddDoctors">
              <Button size="lg">Create</Button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FindDoctors;
