import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { LoginForm, LoginFormWithSocial, LoginWithSocial } from "components";
import Image from "next/image";
import { Container } from "@mui/material";

function LoginPage() {
  return (
    <>
      <Container>
        {/* Login 01 Form start  */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ width: 1, height: "100vh" }}
        >
          <LoginForm />
        </Box>
        {/* Login 01 Form  end

  {/* Login 02 Form  start */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ width: 1, height: "100vh" }}
        >
          <Grid container spacing={2}>
            <Grid item xxs={12} sm={12} md={6}>
              <LoginWithSocial />
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
        {/* Login 02 Form  end */}
        {/* Login 03 Form  start */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ width: 1, height: "100vh" }}
        >
          <Grid container spacing={2}>
            <Grid item xxs={12} sm={12} md={6}>
              <LoginFormWithSocial />
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
        {/* Login 03 Form  end */}
      </Container>
    </>
  );
}

export default LoginPage;
LoginPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
