import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function EditDoctors() {
  const [id, setId] = useState("");
  const [Contact, setContact] = useState("");
  const [Total_staff, setTotal_staff] = useState("");
  const [Total_bed, setTotal_bed] = useState("");
  const [Available_bed, setAvailable_bed] = useState("");
  const [Oxygen_cylinder, setOxygen_cylinder] = useState("");
  const [Ventilator, setVentilator] = useState("");

  let history = useNavigate();

  var index = HospitalData.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = HospitalData[index];
    a.Name = name;
    a.Contact = contact;
    a.Total_staff = total_staff;
    a.Total_bed = total_bed;
    a.Available_bed = available_bed;
    a.Oxygen_cylinder = oxygen_cylinder;
    a.Ventilator = ventilator;

    history("/FindHospitals ");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Contact"));
    setGender(localStorage.getItem("Total_staff"));
    setContact(localStorage.getItem("Total_bed"));
    setDegree(localStorage.getItem("Available_bed"));
    setSpecialization(localStorage.getItem("Oxygen_cylinder"));
    setSpecialization(localStorage.getItem("Ventilator"));
  });

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
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTotal_staff">
          <Form.Control
            type="text"
            placeholder="Enter Total Number Of Staff"
            value={total_staff}
            required
            onChange={(e) => setGender(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTotal_bed">
          <Form.Control
            type="text`"
            placeholder="Enter Total Number Of Beds"
            value={total_bed}
            required
            onChange={(e) => setContact(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAvailable_bed">
          <Form.Control
            type="text"
            placeholder="Enter Number Of Available Beds"
            value={available_bed}
            required
            onChange={(e) => setDegree(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formOxygen_cylinder">
          <Form.Control
            type="text"
            placeholder="Enter Total Number Of Oxygen Cylinders"
            value={oxygen_cylinder}
            required
            onChange={(e) => setSpecialization(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formVentilator">
          <Form.Control
            type="text"
            placeholder="Enter Total Number Of Oxygen Ventilators"
            value={ventilator}
            required
            onChange={(e) => setSpecialization(e.target.value)}
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
