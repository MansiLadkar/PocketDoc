import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HospitalData from "../../components/HospitalData";
import FindHospitals from "./FindHospitals";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

function AddHospitals() {
  const [id, setId] = useState("");
  const [contact, setContact] = useState("");
  const [total_staff, setTotal_staff] = useState("");
  const [total_bed, setTotal_bed] = useState("");
  const [available_bed, setAvailable_bed] = useState("");
  const [oxygen_cylinder, setOxygen_cylinder] = useState("");
  const [ventilator, setVentilator] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = contact,
      c = total_staff,
      d = total_bed,
      f = available_bed,
      g = oxygen_cylinder,
      h = ventilator;

    HospitalData.push({
      id: uniqueId,
      Name: a,
      Contact: b,
      Total_staff: c,
      Total_bed: d,
      Available_bed: f,
      Oxygen_Cylinder: g,
      Ventilator: h,
    });
    history("/FindHospitals");
  };

  return (
    <div>
      <Form className="d-grid gap-3" style={{ margin: "7rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Control
            type="text"
            placeholder="Enter Contact Number"
            value={contact}
            required
            onChange={(e) => setContact(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTotal_staff">
          <Form.Control
            type="text"
            placeholder="Enter Total Number Of Staff"
            value={total_staff}
            required
            onChange={(e) => setTotal_staff(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTotal_bed">
          <Form.Control
            type="text`"
            placeholder="Enter Total Number Of Beds"
            value={total_bed}
            required
            onChange={(e) => setTotal_bed(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAvailable_bed">
          <Form.Control
            type="text"
            placeholder="Enter Number Of Available Beds"
            value={available_bed}
            required
            onChange={(e) => setAvailable_bed(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formOxygen_cylinder">
          <Form.Control
            type="text"
            placeholder="Enter Total Number Of Oxygen Cylinders"
            value={oxygen_cylinder}
            required
            onChange={(e) => setOxygen_cylinder(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formVentilator">
          <Form.Control
            type="text"
            placeholder="Enter Total Number Of Oxygen Ventilators"
            value={ventilator}
            required
            onChange={(e) => setVentilator(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddHospitals;
