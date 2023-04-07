import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { SignUpForm, SignUpFormWithIllustration } from "components";
import Image from "next/image";

function SignupPage() {
  return (
    <>
      {/* Sign Form 1 start */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}
      >
        <SignUpForm />
      </Box>
      {/* Sign Form 1 end */}

      {/* Sign Form 2 start */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}
      >
        <Grid container spacing={2}>
          <Grid item xxs={12} sm={12} md={6}>
            <SignUpFormWithIllustration />
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
      {/* Sign Form 2 end */}
    </>
  );
}

export default SignupPage;
SignupPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
