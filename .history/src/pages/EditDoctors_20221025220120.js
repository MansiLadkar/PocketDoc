import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctor from "../components/Doctor";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");

  let history = useNavigate();
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
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
      </Form>
    </div>
  );
}

export default EditDoctors;
