import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AmbulanceData from "../../components/AmbulanceData";
import { Link, useNavigate } from "react-router-dom";
// import { v4 as uuid } from "uuid";

function EditDoctors() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [hospital_name, setHospital_name] = useState("");
  const [address, setAddress] = useState("");
  const [booking_date, setBooking_date] = useState("");
  const [type, setType] = useState("");

  let history = useNavigate();

  var index = DoctorData.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = DoctorData[index];
    a.Name = name;
    a.Age = age;
    a.Gender = gender;
    a.Contact = contact;
    a.Degree = degree;
    a.Specialization = specialization;

    history("/FindDoctors ");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setGender(localStorage.getItem("Gender"));
    setContact(localStorage.getItem("Contact"));
    setDegree(localStorage.getItem("Degree"));
    setSpecialization(localStorage.getItem("Specialization"));
  });

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
          Update
        </Button>
      </Form>
    </div>
  );
}

export default EditDoctors;
