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
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGender">
          <Form.Control
            type="text"
            placeholder="Enter Gender"
            value={gender}
            required
            onChange={(e) => setGender(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Control
            type="text`"
            placeholder="Enter Contact Number"
            value={contact}
            required
            onChange={(e) => setContact(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDegree">
          <Form.Control
            type="text"
            placeholder="Enter Degree"
            value={degree}
            required
            onChange={(e) => setDegree(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSpecialization">
          <Form.Control
            type="text"
            placeholder="Enter Specialization"
            value={specialization}
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
