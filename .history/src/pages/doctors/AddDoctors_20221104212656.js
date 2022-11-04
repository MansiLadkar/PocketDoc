import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorData from "../../components/DoctorData";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Navbar from "../../components/Navbar";

function AddDoctors() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");

  let history = useNavigate();

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

    DoctorData.push({
      id: uniqueId,
      Name: a,
      Age: b,
      Gender: c,
      Contact: d,
      Degree: f,
      Specialization: g,
    });
    history("/Dashboard/Doctors/FindDoctors");
  };

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
              required
              style={{ width: "370px" }}
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
    </div>
  );
}

export default AddDoctors;
