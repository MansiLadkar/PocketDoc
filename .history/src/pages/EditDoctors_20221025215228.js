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
}
