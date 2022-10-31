import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AmbulanceData from "../../components/AmbulanceData";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

function AddAmbulance() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [hospital_name, setHospital_name] = useState("");
  const [address, setAddress] = useState("");
  const [booking_date, setBooking_date] = useState("");
  const [type, setType] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = contact,
      c = hospital_name,
      d = address,
      f = booking_date,
      g = type;

    DoctorData.push({
      id: uniqueId,
      Name: a,
      Contact: b,
      Hospital_name: c,
      Address: d,
      Booking_date: f,
      Type: g,
    });
    history("/FindDoctors");
  };

  return (
    <div>
      <Form className="d-grid gap-3" style={{ margin: "7rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGender">
          <Form.Control
            type="text"
            placeholder="Enter Gender"
            required
            onChange={(e) => setGender(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Control
            type="text"
            placeholder="Enter Contact Number"
            required
            onChange={(e) => setContact(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDegree">
          <Form.Control
            type="text"
            placeholder="Enter Degree"
            required
            onChange={(e) => setDegree(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSpecialization">
          <Form.Control
            type="text"
            placeholder="Enter Specialization"
            required
            onChange={(e) => setSpecialization(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddDoctors;
