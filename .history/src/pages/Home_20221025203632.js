import React from "react";
import { Button, Table } from "@mui/material";
import Doctor from "../components/Doctor";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact No</th>
              <th>Degree</th>
              <th>Specialist</th>
            </tr>
          </thead>
        </Table>
      </div>
    </Fragment>
  );
}

export default Home;
