import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AmbulanceData from "../../components/AmbulanceData";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { v4 as uuid } from "uuid";

function EditAmbulance() {
  const [Id, setId] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [hospital_name, setHospital_name] = useState("");
  const [address, setAddress] = useState("");
  const [booking_date, setBooking_date] = useState("");
  const [type, setType] = useState("");

  let history = useNavigate();

  var index = AmbulanceData.map(function (e) {
    return e.Id;
  }).indexOf(Id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = AmbulanceData[index];
    a.Name = name;
    a.Contact = contact;
    a.Hospital_name = hospital_name;
    a.Address = address;
    a.Booking_date = booking_date;
    a.Type = type;

    history("/Dashboard/Ambulance/FindAmbulance");
  };

  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
    setContact(localStorage.getItem("Contact"));
    setHospital_name(localStorage.getItem("Hospital_name"));
    setAddress(localStorage.getItem("Address"));
    setBooking_date(localStorage.getItem("Booking_date"));
    setType(localStorage.getItem("Type"));
  }, []);

  return (
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
              value={name}
              required
              style={{ width: "500px" }}
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
          <Form.Group className="mb-3" controlId="formHospital_name">
            <Form.Control
              type="text"
              placeholder="Enter Hospital Name"
              value={hospital_name}
              required
              onChange={(e) => setHospital_name(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBooking_date">
            <Form.Control
              type="text"
              placeholder="Enter Booking Date"
              value={booking_date}
              required
              onChange={(e) => setBooking_date(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formType">
            <Form.Control
              type="text"
              placeholder="Enter Type of Ambulance"
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button onClick={(e) => handleSubmit(e)} type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditAmbulance;
