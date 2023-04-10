import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
const LoginWithSocial = () => {
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
      <Grid container spacing={2}>
        <Grid item xxs={12} sm={12} md={6}>
          <Box sx={{ maxWidth: { xxs: 320, sm: 350 }, mx: "auto" }}>
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
            <Typography variant="h5" sx={{ textAlign: { sm: "left", xxs: "center" } }}>
              Sign in to your account
            </Typography>
            <Typography
              variant="subtitle2"
              component="h6"
              fontWeight="400"
              sx={{
                color: "common.greyLight",
                mb: 2,
                textAlign: { sm: "left", xxs: "center" },
              }}
            >
              or Start Your 14 Days Trial
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{
                color: "common.black",
                pb: 1,
                textAlign: { sm: "left", xxs: "center" },
              }}
            >
              Sign in with
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{ width: 1 }}
            >
              <Button variant="outlined">facebook </Button>
              <Button variant="outlined">Google</Button>
              <Button variant="outlined">Twitter</Button>
            </Box>
            <Divider sx={{ my: 2 }} textAlign="center">
              <Typography variant="body1" sx={{ fontWeight: 400 }} color="common.greyLight">
                OR
              </Typography>
            </Divider>
            <Box component="form" sx={{ width: 1, mt: 3 }} noValidate autoComplete="off">
              <FormControl sx={{ width: 1, mb: 3 }} variant="outlined">
                <TextField
                  sx={{ width: 1 }}
                  required
                  id="outlined-required"
                  label="Email"
                  size="small"
                />
              </FormControl>
              <FormControl sx={{ width: 1 }} variant="outlined">
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
              <Box display="flex" sx={{ pt: 1 }} justifyContent="flex-end">
                <Link href="/password">
                  <Typography variant="small" color="">
                    Forgot your password?
                  </Typography>
                </Link>
              </Box>
              <Box display="flex" sx={{ pb: 3 }} justifyContent="flex-start">
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
              </Box>
              <Button variant="contained" sx={{ width: 1 }}>
                {" "}
                Sign in{" "}
              </Button>
              <Box display="flex" alignItems="center" justifyContent="center" sx={{ pt: 3 }}>
                <Typography> Don&#44;t have a account?</Typography>
                <Link href="/signup">Signup</Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xxs={0} sm={12} md={6} sx={{ display: { xxs: "none", md: "flex" } }}>
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
  );
};

export default LoginWithSocial;
