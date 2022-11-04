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
            marginTop={12}
            marginBottom={5}
            marginLeft={40}
            marginRight={29}
            padding={5}
            height={500}
            borderRadius={5}
            backgroundColor={"black"}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <div className="logo">
              <img src={image} alt="ello" />
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
                  required="true"
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
                required="true"
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
                required="true"
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
              <br></br>
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

// export default Login;

// import React from "react";
// import image from "../components/image.jpeg";
// import { Row, Col, Form, Input } from "antd";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // import { userLogin } from "../redux/actions/userActions";
// import AOS from "aos";
// // import Spinner from "../components/Spinner";
// import "aos/dist/aos.css";

// AOS.init();
// function Login() {
//   const dispatch = useDispatch();
//   const { loading } = useSelector((state) => state.alertsReducer);
//   function onFinish(values) {
//     // dispatch(userLogin(values));
//     console.log(values);
//   }
//   return (
//     <div className="login">
//       {loading}
//       <Row gutter={16} className="d-flex align-items-center">
//         <Col lg={16} style={{ position: "relative" }}>
//           <img
//             className="w-100"
//             data-aos="slide-right"
//             data-aos-duration="1500"
//             src={image}
//           />
//           <h1 className="login-logo">PocketDoc</h1>
//         </Col>
//         <Col lg={8} className="text-left p-5">
//           <Form
//             layout="vertical"
//             className="login-form p-5"
//             onFinish={onFinish}
//           >
//             <h1>Login</h1>
//             <hr />
//             <Form.Item
//               name="username"
//               label="Username"
//               rules={[{ required: true }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="password"
//               label="Password"
//               rules={[{ required: true }]}
//             >
//               <Input type="password" />
//             </Form.Item>

//             <button className="btn1 mt-2">Login</button>

//             <hr />

//             <Link to="/register">Click Here to Register</Link>
//           </Form>
//         </Col>
//       </Row>
//     </div>
//   );
// }

export default Login;
