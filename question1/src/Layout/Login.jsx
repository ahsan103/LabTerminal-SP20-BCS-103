import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
function Login() {
  const { register, handleSubmit } = useForm();
  const [border, setBorder] = useState(false);
  const [token, setToken] = useState("");
  const submit = (data) => {
    if (data.password === "" || data.username === "") {
      setBorder(true);
    } else {
      axios
        .post("https://dummyjson.com/auth/login", data)
        .then((res) => setToken(res.data.token))
        .catch((err) => {});
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginX: 50,

          marginY: 10,
          padding: 10,
          borderWidth: 5,
          borderColor: "black",
          borderStyle: "solid",
          borderRadius: 10,
        }}
      >
        <Typography sx={{ color: !border ? "black" : "red" }}>
          {border ? "Please Enter Email" : "Name"}
        </Typography>
        <TextField {...register("username")} type={"email"} />
        <Typography sx={{ marginTop: 2, color: !border ? "black" : "red" }}>
          {border ? "Please Enter Password" : "Password"}
        </Typography>
        <TextField {...register("password")} type={"password"} />
        <Button
          sx={{ marginTop: 2 }}
          variant="contained"
          onClick={handleSubmit(submit)}
        >
          Submit
        </Button>
      </Box>
      <Typography variant="body1" sx={{ width: window.innerWidth }}>
        {token}
      </Typography>
    </Box>
  );
}

export default Login;
