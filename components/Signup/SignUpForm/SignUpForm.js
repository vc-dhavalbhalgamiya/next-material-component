import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ width: 1, height: "100vh" }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ a: { textDecoration: "none" }, p: { xxs: 1, sm: 0 } }}
      >
        <Box>
          <Link href="/">
            <Box display="flex" alignItems="center" justifyContent="center">
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
                width={40}
                height={40}
              />
              <Typography sx={{ ml: 2 }} variant="h6">
                Flowbite
              </Typography>
            </Box>
          </Link>
          <Box
            sx={{
              maxWidth: { xxs: 1, sm: 350 },
              mt: { xxs: 1, sm: 3 },
              borderRadius: 3,
              boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
              p: { xxs: 1.5, sm: 3 },
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Create a New account
            </Typography>
            <Box component="form" sx={{ width: 1, mt: 3 }} noValidate autoComplete="off">
              <FormControl sx={{ width: 1, mb: 3 }} variant="outlined">
                <TextField
                  sx={{ width: 1 }}
                  required
                  id="outlined-required"
                  label="Name"
                  size="small"
                />
              </FormControl>
              <FormControl sx={{ width: 1, mb: 3 }} variant="outlined">
                <TextField
                  sx={{ width: 1 }}
                  required
                  id="outlined-required"
                  label="Email"
                  size="small"
                />
              </FormControl>
              <FormControl sx={{ width: 1, mb: 3 }} variant="outlined">
                <TextField
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  label="Password"
                />
              </FormControl>
              <FormControl sx={{ width: 1, mb: 3 }} variant="outlined">
                <TextField
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  label="Confirm Password"
                />
              </FormControl>
              <Button variant="contained" sx={{ width: 1 }}>
                Create Account
              </Button>
              <Box display="flex" alignItems="center" justifyContent="center" sx={{ pt: 3 }}>
                <Typography variant="body1">Don&#44;t have a account?</Typography>
                <Link href="/login">
                  <Typography variant="body1">Login</Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
