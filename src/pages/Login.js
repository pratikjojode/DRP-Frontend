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
import {
  Visibility,
  VisibilityOff,
  Login as LoginIcon,
  PersonAdd as PersonAddIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import "../styles/Login.css";
import loginimage from "../../src/images/DRP12.png";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });

      console.log(response.data);

      if (response.data.message === "Login successful") {
        localStorage.setItem("token", response.data.token);

        if (response.data.user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }

        toast.success("Login successful for Admin credentials.");
      } else {
        toast.error("Invalid credentials, please try again.");
      }
    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage(error.response?.data?.message || "An error occurred");
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <Container component="main" maxWidth={false} className="login-container">
        <Box className="split-layout">
          <Box className="image-side">
            <img src={loginimage} alt="Login" className="login-image" />
          </Box>

          {/* Login Form Side */}
          <Box className="form-side">
            <Box className="login-box">
              <p className="tagline">Unlock endless possibilities with us!</p>
              <h2>Welcome to DRP Group</h2>
              <p>
                Elevate your career with cutting-edge technology and innovative
                solutions. Join a community that believes in growth,
                collaboration, and success.
              </p>

              <h1>Login to Your Account</h1>

              {errorMessage && (
                <Typography color="error" className="error-message">
                  {errorMessage}
                </Typography>
              )}

              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
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
                onClick={handleLogin}
                className="login-button"
                startIcon={<LoginIcon />}
              >
                Login
              </Button>
              <Link to="/register" className="register-link">
                <Button className="">
                  Don’t have an account? Sign up today and start your journey!
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
