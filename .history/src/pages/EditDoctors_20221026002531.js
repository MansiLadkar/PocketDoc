import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctor from "../components/Doctor";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

function EditDoctors() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");

  let history = useNavigate();

  var index = Doctor.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age,
      c = gender,
      d = contact,
      f = degree,
      g = specialization;

    Doctor.push({
      id: uniqueId,
      name: a,
      age: b,
      gender: c,
      contact: d,
      degree: f,
      specialization: g,
    });
    history("/FindDoctors ");
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
            type="text"
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
