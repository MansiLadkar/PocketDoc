import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorData from "../../components/DoctorData";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { v4 as uuid } from "uuid";

function EditDoctors() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");

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

    history("/Dashboard/Doctors/FindDoctors ");
  };

  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setGender(localStorage.getItem("Gender"));
    setContact(localStorage.getItem("Contact"));
    setDegree(localStorage.getItem("Degree"));
    setSpecialization(localStorage.getItem("Specialization"));
  }, []);

  return (
    <div className="App">
      <div className="navb">
        <Navbar />
      </div>
      <div className="content">
        <Form className="d-grid gap-3" style={{ margin: "7rem" }}>
        <field
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              required
              style={{ width: "370px" }}

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
                  /> 

        </Form>
      </div>
    </div>
  );
}

export default EditDoctors;
