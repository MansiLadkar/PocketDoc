import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import logo from "../components/logo.jpeg";
const Login = () => {
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
            marginTop={12}
            marginBottom={8}
            marginLeft={29}
            marginRight={29}
            padding={5}
            height={500}
            borderRadius={5}
            backgroundColor={black}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <div className="logo">
              <img src={logo} alt="ello" />
            </div>
            <div className="content">
              <Typography variant="h2" padding={3} textAlign="center">
                {isSignup ? "Signup" : "Login"}
              </Typography>
              {isSignup && (
                <TextField
                  onChange={handleChange}
                  value={inputs.name}
                  name="name"
                  margin="normal"
                  type={"text"}
                  variant="outlined"
                  placeholder="Name"
                />
              )}
              <br></br>
              <TextField
                onChange={handleChange}
                value={inputs.email}
                name="email"
                margin="normal"
                type={"email"}
                variant="outlined"
                placeholder="Email"
              />
              <br></br>
              <TextField
                onChange={handleChange}
                value={inputs.password}
                name="password"
                margin="normal"
                type={"password"}
                variant="outlined"
                placeholder="Password"
              />
              <div className="btn1">
                <Button
                  type="submit"
                  // sx={{ marginTop: 3, borderRadius: 3 }}
                  // variant="contained"
                  // color="blue"
                >
                  {isSignup ? "Signup" : "login"}
                </Button>
              </div>
              <div className="btn2">
                <Button
                  onClick={resetState}
                  sx={{ marginTop: 3, borderRadius: 3 }}
                  // variant="contained"
                  // color="blue"
                >
                  {isSignup ? "Login" : "Signup"}{" "}
                </Button>
              </div>
            </div>
          </Box>
        </div>
      </form>
    </div>
  );
};

export default Login;
