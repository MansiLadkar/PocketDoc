import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import image from "../components/image.jpeg";
import Register from "./Register";
const Login = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  let navigate_reg = useNavigate();
  const routeChangeToReg = () => {
    let path = "Register";
    navigate_reg(path);
  };

  let navigate_dashboard = useNavigate();
  const routeChangeToDashboard = () => {
    let path = "Dashboard";
    navigate_dashboard(path);
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
            <div className="image">
              <img src={image} alt="image" />
            </div>
            <div className="content">
              <Typography
                variant="h2"
                padding={1}
                marginTop={-5}
                marginBottom={1}
                textAlign="center"
              >
                Login
              </Typography>
              <TextField
                onChange={handleChange}
                value={inputs.email}
                name="email"
                margin="normal"
                type={"email"}
                variant="outlined"
                placeholder="Email"
                required="true"
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
              />
              <br></br>
              {/* login button */}
              <Button
                className="btn1"
                type="submit"
                sx={{ marginTop: 3, borderRadius: 3 }}
                variant="contained"
                onClick={routeChangeToDashboard}
              >
                login
              </Button>
              &nbsp;
              {/* signup button */}
              <Button
                className="btn2"
                sx={{ marginTop: 3, marginRight: 7, borderRadius: 3 }}
                variant="contained"
                onClick={routeChangeToReg}
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

export default Login;
