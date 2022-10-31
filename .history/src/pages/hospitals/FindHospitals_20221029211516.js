import React from "react";
import { Button, Table } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import HospitalData from "../../components/HospitalData";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

function FindDoctors() {
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
    localStorage.getItem("Name", name);
    localStorage.getItem("Contact", contact);
    localStorage.getItem("Total_staff", total_staff);
    localStorage.getItem("Total_bed", total_bed);
    localStorage.getItem("Available_bed", available_bed);
    localStorage.getItem("Oxygen_cylinder", oxygen_cylinder);
    localStorage.getItem("Ventilator", ventilator);
  };

  const handleDelete = (id) => {
    var index = DoctorData.map(function (e) {
      return e.id;
    }).indexOf(id);

    DoctorData.splice(index, 1);

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
                        <Link to={"/EditDoctors"}>
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
        <Link className="d-grid" to="/AddDoctors">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default FindHospitals;
