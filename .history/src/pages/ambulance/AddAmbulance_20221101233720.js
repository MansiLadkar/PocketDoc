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

    AmbulanceData.push({
      id: uniqueId,
      Name: a,
      Contact: b,
      Hospital_name: c,
      Address: d,
      Booking_date: f,
      Type: g,
    });
    history("/FindAmbulance");
  };

  return (
    <div>
    <div className="App">
      <div className="navb">
        <Navbar />
      </div>
      <div className="content">
      <Form className="d-grid gap-3" style={{ margin: "7rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Control
            type="text"
            placeholder="Enter Contact Name"
            required
            onChange={(e) => setContact(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHospital_name">
          <Form.Control
            type="text"
            placeholder="Enter Hospital Name"
            required
            onChange={(e) => setHospital_name(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Control
            type="text"
            placeholder="Enter Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBooking_date">
          <Form.Control
            type="text"
            placeholder="Enter Booking Date"
            required
            onChange={(e) => setBooking_date(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formType">
          <Form.Control
            type="text"
            placeholder="Enter Type of Ambulance"
            required
            onChange={(e) => setType(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default AddAmbulance;
