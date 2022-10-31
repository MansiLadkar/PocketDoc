import React from "react";
import { Button, Table } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctor from "../components/Doctor";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

function FindDoctors() {
  let history = useNavigate();

  const handleEdit = (
    id,
    name,
    age,
    gender,
    contact,
    degree,
    Specialization
  ) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Contact", contact);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("Contact", contact);
    localStorage.setItem("Degree", degre);
    localStorage.setItem("Specialization", Specialization);
  };

  const handleDelete = (id) => {
    var index = Doctor.map(function (e) {
      return e.id;
    }).indexOf(id);

    Doctor.splice(index, 1);

    history("/FindDoctors");
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
            {Doctor && Doctor.length > 0
              ? Doctor.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>{item.Gender}</td>
                      <td>{item.Contact}</td>
                      <td>{item.Degree}</td>
                      <td>{item.Specialization}</td>
                      <td>
                        <Link to={"/EditDoctors"}>
                          <Button
                            onClick={() =>
                              handleEdit(
                                item.id,
                                item.Name,
                                item.Age,
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
        <Link className="d-grid" to="/AddDoctors">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default FindDoctors;
