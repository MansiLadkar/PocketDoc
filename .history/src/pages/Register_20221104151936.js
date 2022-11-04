import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import image from "../components/image.jpeg";
import Login from "./Login";
const Register = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  let navigate_login = useNavigate();
  const routeChangeToLogin = () => {
    let path = "/";
    navigate_login(path);
  };

  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({ name: "", email: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="main">
          <Box
            display="flex"
            flexDirection={"column"}
            maxwidth={300}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={18}
            marginBottom={5}
            marginLeft={50}
            marginRight={29}
            padding={5}
            height={500}
            width={900}
            borderRadius={5}
            backgroundColor={"white "}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            {/* <div className="image">
              <img
                src={image}
                alt="image"
                style={{
                  backgroundColor: "black",
                }}
              />
            </div> */}
            <div className="content">
              <Typography
                variant="h2"
                padding={2}
                marginTop={-10}
                textAlign="center"
                marginRight={8}
              >
                Register
              </Typography>
              <TextField
                onChange={handleChange}
                value={inputs.name}
                name="name"
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Name"
                required="true"
                style={{ width: 300 }}
              />
              <br />
              <TextField
                onChange={handleChange}
                value={inputs.email}
                name="email"
                margin="normal"
                type={"email"}
                variant="outlined"
                placeholder="Email"
                required="true"
                style={{ width: 300 }}
              />
              <br />
              <TextField
                onChange={handleChange}
                value={inputs.password}
                name="password"
                margin="normal"
                type={"password"}
                variant="outlined"
                placeholder="Password"
                required="true"
                style={{ width: 300 }}
              />

              <Button
                className="btn3"
                sx={{ marginTop: 3, borderRadius: 3 }}
                variant="contained"
                onClick={routeChangeToLogin}
              >
                Signup
              </Button>
            </div>
          </Box>
        </div>
      </form>
    </div>
  );
};

export default Register;
