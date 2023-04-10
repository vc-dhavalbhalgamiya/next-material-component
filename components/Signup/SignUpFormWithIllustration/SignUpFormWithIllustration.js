import { Visibility, VisibilityOff } from "@mui/icons-material";
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
import Grid from "@mui/material/Grid";


const SignUpFormWithIllustration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}
      >
        <Grid container spacing={2}>
          <Grid item xxs={12} sm={12} md={6}>
            <Box sx={{ maxWidth: { xxs: 320, sm: 350 }, mx: "auto", p: { xxs: 2, sm: 2, md: 3 } }}>
              <Box sx={{ a: { textDecoration: "none" }, mb: 3 }}>
                <Link href="/">
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ justifyContent: { xxs: "center", sm: "flex-start" } }}
                  >
                    <Image
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                      alt="logo"
                      width={40}
                      height={40}
                    />
                    <Typography sx={{ ml: { xxs: 1, sm: 2 } }} variant="h6">
                      Flowbite
                    </Typography>
                  </Box>
                </Link>
              </Box>
              <Typography variant="h5" sx={{ textAlign: { xxs: "center", sm: "left" } }}>
                Create a New account
              </Typography>
              <Typography
                variant="subtitle2"
                component="h6"
                fontWeight="400"
                sx={{
                  color: "common.greyLight",
                  mb: 2,
                  textAlign: { xxs: "center", sm: "left" },
                }}
              >
                with 14 Days Trial
              </Typography>
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{
                  color: "common.black",
                  pb: 1,
                  textAlign: { xxs: "center", sm: "left" },
                }}
              >
                Sign in with
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
                  Create account
                </Button>
                <Box display="flex" alignItems="center" justifyContent="center" sx={{ pt: 3 }}>
                  <Typography>Already have a account?</Typography>
                  <Link href="/login">Login</Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} sx={{ display: { xxs: "none", sm: "none", md: "flex" } }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ maxWidth: 1, width: 1 }}
            >
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
                alt="banner"
                width={560}
                height={586}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignUpFormWithIllustration;
