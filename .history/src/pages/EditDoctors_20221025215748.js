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
      </Form>
    </div>
  );
}

export default EditDoctors;
