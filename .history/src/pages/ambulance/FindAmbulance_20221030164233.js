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
    var index = AmbulanceData.map(function (e) {
      return e.id;
    }).indexOf(id);

    AmbulanceData.splice(index, 1);

    history("/FindAmbulance");
  };
  return (
    <Fragment>
      <div style={{ margin: "8rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Hospital_name</th>
              <th>Address</th>
              <th>Booking_date</th>
              <th>Type</th>

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
