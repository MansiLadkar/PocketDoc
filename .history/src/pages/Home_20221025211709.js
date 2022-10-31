import React from "react";
import { Button, Table } from "@mui/material";
import Doctor from "../components/Doctor";
import { Fragment } from "react";

function Home() {
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
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.Gender}</td>
                      <td>{item.contact}</td>
                      <td>{item.degree}</td>
                      <td>{item.specialization}</td>
                      <td><Button onClick={() => alert{item.id}}</td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

export default Home;
