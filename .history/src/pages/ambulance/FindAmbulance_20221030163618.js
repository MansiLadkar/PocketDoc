import React from "react";
import { Button, Table } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import AmbulanceData from "../../components/AmbulanceData";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

function FindAmbulance() {
  let history = useNavigate();

  const handleEdit = (
    id,
    hname,
    hcontact,
    total_staff,
    total_bed,
    available_bed,
    oxygen_cylinder,
    ventilator
  ) => {
    localStorage.setItem("Id", id);
    localStorage.getItem("Name", hname);
    localStorage.getItem("Contact", hcontact);
    localStorage.getItem("Total_staff", total_staff);
    localStorage.getItem("Total_bed", total_bed);
    localStorage.getItem("Available_bed", available_bed);
    localStorage.getItem("Oxygen_cylinder", oxygen_cylinder);
    localStorage.getItem("Ventilator", ventilator);
  };

  const handleDelete = (id) => {
    var index = HospitalData.map(function (e) {
      return e.id;
    }).indexOf(id);

    HospitalData.splice(index, 1);

    history("/FindHospitals");
  };
  return (
    <Fragment>
      <div style={{ margin: "8rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Total_staff</th>
              <th>Total_bed</th>
              <th>Available_bed</th>
              <th>Oxygen_cylinder</th>
              <th>Ventilator</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {HospitalData && HospitalData.length > 0
              ? HospitalData.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Contact}</td>
                      <td>{item.Total_staff}</td>
                      <td>{item.Total_bed}</td>
                      <td>{item.Available_bed}</td>
                      <td>{item.Oxygen_cylinder}</td>
                      <td>{item.Ventilator}</td>
                      <td>
                        <Link to={"/EditHospitals"}>
                          <Button
                            onClick={() =>
                              handleEdit(
                                item.id,
                                item.Name,
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
          </tbody>
        </Table>
        <br></br>
        <Link className="d-grid" to="/AddHospitals">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default FindAmbulance;
