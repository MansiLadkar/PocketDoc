import React from "react";
import { Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import HospitalData from "../../components/HospitalData";
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

function FindHospitals() {
  let history = useNavigate();

  const handleEdit = (
    id,
    name,
    contact,
    total_staff,
    total_bed,
    available_bed,
    oxygen_cylinder,
    ventilator
  ) => {
    localStorage.setItem("Id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Contact", contact);
    localStorage.setItem("Total_staff", total_staff);
    localStorage.setItem("Total_bed", total_bed);
    localStorage.setItem("Available_bed", available_bed);
    localStorage.setItem("Oxygen_cylinder", oxygen_cylinder);
    localStorage.setItem("Ventilator", ventilator);
  };

  const handleDelete = (id) => {
    var index = HospitalData.map(function (e) {
      return e.id;
    }).indexOf(id);

    HospitalData.splice(index, 1);

    history("/Dashboard/Hospitals/FindHospitals");
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
                    <StyledTableCell align="left">
                      Contact&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Total_staff&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Total_bed&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Available_bed&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Oxygen_cylinder&nbsp;
                    </StyledTableCell>
                    <StyledTableCell align="leftt">
                      Ventilator&nbsp;
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="left">
                      Action&nbsp;
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {HospitalData && HospitalData.length > 0
                    ? HospitalData.map((item) => {
                        return (
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.Contact}</td>
                            <td>{item.Total_staff}</td>
                            <td>{item.Total_bed}</td>
                            <td>{item.Available_bed}</td>
                            <td>{item.Oxygen_cylinder}</td>
                            <td>{item.Ventilator}</td>
                            <td>
                              <Link to={"/Dashboard/Hospitals/EditHospitals"}>
                                <Button
                                  onClick={() =>
                                    handleEdit(
                                      item.id,
                                      item.name,
                                      item.Contact,
                                      item.Total_staff,
                                      item.Total_bed,
                                      item.Available_bed,
                                      item.Oxygen_cylinder,
                                      item.Ventilator
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
            <Link className="d-grid" to="/Dashboard/Hospitals/AddHospitals">
              <Button size="lg" variant="contained">
                Create
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FindHospitals;