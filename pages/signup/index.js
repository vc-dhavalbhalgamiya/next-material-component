import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { SignUpForm, SignUpFormWithIllustration } from "components";
import Image from "next/image";

function SignupPage() {
  return (
    <>
      {/* Sign Form 1 start */}

      <SignUpForm />

      {/* Sign Form 1 end */}

      {/* Sign Form 2 start */}

      <SignUpFormWithIllustration />

      {/* Sign Form 2 end */}
    </>
  );
}

export default SignupPage;
SignupPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
