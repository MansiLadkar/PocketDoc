import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import image from "../components/image.jpeg";
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
              <img
                src={image}
                alt="image"
                // style={{
                //   width: 20,
                //   backgroundColor: "black",
                //   verticalAlign: "left",
                // }}
              />
            </div>
            <div className="content">
              {/* <Typography
                variant="h2"
                padding={3}
                marginTop={22}
                textAlign="center"
              >
                {isSignup ? "Signup" : "Login"}
              </Typography> */}
              {isSignup && (
                <TextField
                  onChange={handleChange}
                  value={inputs.name}
                  name="name"
                  margin="normal"
                  type={"text"}
                  variant="outlined"
                  placeholder="Name"
                  required="true"
                />
              )}
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
              login button
              {/* <div className="btn1">
                <Button
                  type="submit"
                  sx={{ marginTop: 3, borderRadius: 3 }}
                  variant="contained"
                >
                  {isSignup ? "Signup" : "login"}
                </Button>
              </div>
              <br /> */}
              {/* signup button */}
              <div className="btn2">
                <Button
                  onClick={resetState}
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    borderRadius: 3,
                  }}
                  variant="contained"
                  textAlign="center"
                  padding={0}
                >
                  <Typography padding={3} marginTop={-8}></Typography>
                  Signup
                </Button>
              </div>
            </div>
          </Box>
        </div>
      </form>
    </div>
  );
};

export default Register;
