import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../styles/register.css"; // Import the external CSS file
import registerimage from "../../src/images/DRP12.png"; // Import the image
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
      });

      if (
        response.data.message === "User registered successfully and email sent."
      ) {
        toast.success("Registration successful! Redirecting to login...");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed", error);
      setErrorMessage(error.response?.data?.message || "An error occurred");
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <Container
        component="main"
        maxWidth={false}
        className="register-container"
      >
        <Box className="split-layout">
          <Box className="image-side">
            <img
              src={registerimage}
              alt="Register"
              className="register-image"
            />
          </Box>

          {/* Registration Form Side */}
          <Box className="form-side">
            <Box className="register-box">
              <p className="tagline">Join us and start your journey!</p>
              <h2>Welcome to DRP IT Solutions Pvt Ltd</h2>
              <p>Fill in your details to create an account.</p>

              <h1>Register to Your Account</h1>

              {errorMessage && (
                <Typography color="error" className="error-message">
                  {errorMessage}
                </Typography>
              )}

              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="register-input"
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="register-input"
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="register-input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleRegister}
                className="register-button"
              >
                Register
              </Button>
              <Link to="/login" className="register-link">
                <Button className="">Already have an account? Log in</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Register;
