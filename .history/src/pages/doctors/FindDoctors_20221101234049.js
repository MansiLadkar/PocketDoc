import React from "react";
import { Button, Table } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorData from "../../components/DoctorData";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

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
      <div style={{ margin: "8rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact No</th>
              <th>Degree</th>
              <th>Specialization</th>
              <th>Action</th>
            </tr>
          </thead>
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
        <br></br>
        <Link className="d-grid" to="/Dashboard/Doctors/AddDoctors">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default FindDoctors;
