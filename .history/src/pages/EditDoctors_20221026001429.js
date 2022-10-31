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
}
